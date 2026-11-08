pub mod kebab_search;
use crate::kebab_search::find_kebab::{find_kebab};
use crate::kebab_search::models::KebabReturnResponse;

#[macro_use] extern crate rocket;
use rocket::{http::{self, Method}, serde::json::Json};
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

#[get("/find_kebab?<user_lat>&<user_lon>")]
async fn locate_kebab(user_lat: f64, user_lon: f64) -> Json<KebabReturnResponse> {
    let response: KebabReturnResponse = match find_kebab(user_lat, user_lon).await {
        Some(r) => { r }
        None => {
            eprintln!("Could not locate the nearest Kebab!");
            return Json(KebabReturnResponse::new(
                String::from("ERROR: Error locating The Kebab!"),
                String::from(""),
                [0.0, 0.0],
                http::Status::NoContent
            ))
        }
    };
    println!("{:?}", response);
    Json(response)
}