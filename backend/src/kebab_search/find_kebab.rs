use reqwest;
use crate::kebab_search::models::*;

pub async fn find_kebab(user_lat: f64, user_lon: f64) -> Option<KebabReturnResponse> {
    let api_url: String = format!("https://photon.komoot.io/api/?q=kebab&lat={user_lat}&lon={user_lon}&limit=1");

    let response = match reqwest::get(api_url).await {
        Ok(response) => { response }
        Err(e) => {
            eprintln!("ERROR: Error while getting text from API!\n\n{e}");
            return None
        }
    };

    let request_parsed: KebabResponse = match response.json().await {
        Ok(parsed) => { parsed }
        Err(e) => {
            eprintln!("ERROR: Error while parsing response to json format!\n\n{e}");
            return None
        }
    };

    let feature: Feature = request_parsed.features.into_iter().next()?;
    let properties: FeatureProperties = feature.properties;
    let [lon, lat] = feature.geometry.coordinates;

    let mut name: String = String::new();
    if let Some(n) = properties.name {
        name.push_str(n.as_str());
    }

    let mut address: String = String::new();
    if let Some(s) = properties.street {
        address.push_str(s.as_str());
    }
    if let Some(hn) = properties.house_number {
        address.push_str(hn.as_str());
    }

    Some(KebabReturnResponse::new(
        name,
        address,
        [lat, lon]
    ))
}