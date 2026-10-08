pub mod extern_api;

#[macro_use] extern crate rocket;
use rocket::serde::json::Json;
use serde::{Serialize, Deserialize};

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
}

#[derive(Serialize, Deserialize)]
struct Response {
    message: String,
    code: u8
}
impl Response {
    fn new(message: String, code: u8) -> Self {
        Self { message, code }
    }
}


#[get("/")]
fn index() -> Json<Response> {
    Json(Response::new(String::from("This is the index"), 200))
}