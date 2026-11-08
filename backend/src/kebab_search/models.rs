use serde::{Serialize, Deserialize};
use rocket::http::Status;

/// Struct used as the base to deserialize the JSON from the API call.
#[derive(Deserialize, Debug)]
pub struct KebabResponse {
    pub features: Vec<Feature>
}
#[derive(Deserialize, Debug)]
pub struct Feature {
    pub properties: FeatureProperties,
    pub geometry: Geometry
}
#[derive(Deserialize, Debug)]
pub struct FeatureProperties {
    pub name: Option<String>,
    pub street: Option<String>,
    #[serde(rename="housenumber")]
    pub house_number: Option<String>
}
#[derive(Deserialize, Debug)]
pub struct Geometry {
    pub coordinates: [f64; 2]
}

/// Struct used to return the base information of the Kebab place.
#[derive(Serialize, Debug)]
pub struct KebabReturnResponse {
    pub name: String,
    pub address: String,
    pub coordinates: [f64; 2],
    pub status: Status
}
impl KebabReturnResponse {
    pub fn new(name: String, address: String, coordinates: [f64; 2], status: Status) -> KebabReturnResponse {
        KebabReturnResponse { name, address, coordinates, status }
    }
}