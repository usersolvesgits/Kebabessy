#[macro_use] extern crate rocket;
use rocket::{http, serde::json::Json};
use serde::{Serialize};
use rocket_cors::{CorsOptions, AllowedOrigins};

#[rocket::launch]
fn rocket() -> _ {
    const ORIGIN: &str = "http://localhost:8081";

    let cors = CorsOptions {
        allowed_origins:  AllowedOrigins::some_exact(&[ORIGIN]),
        ..Default::default()
    }
        .to_cors()
        .expect("Error while building cors settings!");

    rocket::build()
        .mount("/", routes![index])
        .attach(cors)
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

#[get("/test")]
fn index() -> Json<Response> {
    Json(Response::new(String::from("This is a message"), http::Status::Ok))
}