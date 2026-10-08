use serde::Deserialize;
use std::collections::HashMap;

const API_BASE_URL: &str = "https://overpass-api.de/api/interpreter";

#[derive(Deserialize, Debug)]
struct Center {
    lat: f64,
    lon: f64
}

#[derive(Deserialize, Debug)]
struct Element {
    #[serde(rename="type")]
    kind: String,
    id: u64,
    lat: Option<f64>,
    lon: Option<f64>,
    tags: HashMap<String, String>,
    center: Option<Center>
}
impl Element {
    fn get_coords(&self) -> Option<(f64, f64)> {
        match (self.lat, self.lon, &self.center) {
            (Some(lat), Some(lon), _) => {
                Some((lat, lon))
            }
            (_, _, Some(center)) => {
                Some((center.lat, center.lon))
            }
            _ => { None }
        }
    }
}

#[derive(Deserialize, Debug)]
struct Response { response: Vec<Element> }

fn get_kebab(user_lat: f64, user_lon: f64) -> Option<(f64, f64)> {
    None
}