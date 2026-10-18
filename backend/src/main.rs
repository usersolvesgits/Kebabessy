#[macro_use] extern crate rocket;
use rocket::{http::{self, Method}, serde::json::Json};
use serde::{Serialize, Deserialize};
use rocket_cors::{CorsOptions, AllowedOrigins, AllowedHeaders};

#[rocket::launch]
fn rocket() -> _ {
    const ORIGIN: &str = "http://localhost:8081";

    let cors = CorsOptions {
        allowed_origins:  AllowedOrigins::some_exact(&[ORIGIN]),
        allowed_methods: Vec::from([Method::Get, Method::Put])
            .into_iter()
            .map(From::from)
            .collect(),
        allowed_headers: AllowedHeaders::some(&["Content-Type"]),
        ..Default::default()
    }
        .to_cors()
        .expect("Error while building cors settings!");

    rocket::build()
        .mount("/", routes![index, put_user_location])
        .attach(cors)
}
#[get("/test")]
fn index() -> Json<Response> {
    Json(Response::new(String::from("This is a message"), http::Status::Ok))
}


#[derive(Serialize)]
struct Response {
    message: String,
    http_status: http::Status
}
impl Response {
    fn new(message: String, http_status: http::Status) -> Response {
        Response { message, http_status }
    }
}

#[derive(Deserialize, Debug)]
struct UserLocation {
    user_lat: f64,
    user_lon: f64
}

#[put("/user_location", data = "<location>")]
fn put_user_location(location: Json<UserLocation>) -> Json<Response> {
    println!("Received location: {:?}", location);

    let user_loc: UserLocation = location.into_inner();
    println!("gps_user values: lat => {:?}; lon => {:?}", user_loc.user_lat, user_loc.user_lon);

    Json(Response::new(String::from("Location received"), http::Status::Ok))
}