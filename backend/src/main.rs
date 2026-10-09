pub mod extern_api;

#[macro_use] extern crate rocket;
use rocket::{http::Status, serde::json::Json};
use serde::{Serialize, Deserialize};
use rocket_cors::{CorsOptions, AllowedOrigins};

#[launch]
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

#[derive(Serialize, Deserialize)]
struct Response {
    message: String,
    status_code: Status
}
impl Response {
    fn new(message: String, status_code: Status) -> Self {
        Self { message, status_code }
    }
}

#[get("/test")]
fn index() -> Json<Response> {
    Json(Response::new(String::from("this is some placeholder data"), Status::Ok))
}