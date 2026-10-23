pub mod kebab_search;
use crate::kebab_search::find_kebab::{find_kebab};
use crate::kebab_search::models::KebabReturnResponse;

#[macro_use] extern crate rocket;
use rocket::{http::{self, Method}, serde::json::Json};
use serde::Serialize;
use rocket_cors::{CorsOptions, AllowedOrigins, AllowedHeaders};

#[rocket::launch]
fn rocket() -> _ {
    const ORIGIN: &str = "http://localhost:8081";

    let cors = CorsOptions {
        allowed_origins:  AllowedOrigins::some_exact(&[ORIGIN]),
        allowed_methods: Vec::from([Method::Get])
            .into_iter()
            .map(From::from)
            .collect(),
        allowed_headers: AllowedHeaders::some(&["Content-Type"]),
        ..Default::default()
    }
        .to_cors()
        .expect("Error while building cors settings!");

    rocket::build()
        .mount("/", routes![locate_kebab])
        .attach(cors)
}

#[derive(Serialize, Debug)]
struct Response {
    message: String,
    http_status: http::Status
}
impl Response {
    fn new(message: String, http_status: http::Status) -> Response {
        Response { message, http_status }
    }
}

#[get("/find_kebab?<user_lat>&<user_lon>")]
async fn locate_kebab(user_lat: f64, user_lon: f64) -> Json<Response> {
    let response: KebabReturnResponse = match find_kebab(user_lat, user_lon).await {
        Some(r) => { r }
        None => {
            eprintln!("Could not locate the nearest Kebab!");
            return Json(Response::new(String::from("ERROR: Error locating The Kebab!"), http::Status::NoContent))
        }
    };

    let message: String = format!("name: {}, address: {}, coords (lat, lon): {:?}",
                                  response.name, response.address, response.coordinates);
    let response = Response::new(message, http::Status::Ok);
    println!("{:?}", response);
    Json(response)
}