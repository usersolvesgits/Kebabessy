import * as GeoLocation from 'expo-location';

const BASE_URL = "http://localhost:8080";

export async function sendUserLocation() {
    const { status: permissionStatus } = await GeoLocation.requestForegroundPermissionsAsync();
    if (permissionStatus !== 'granted') {
        alert('GeoLocation request not granted!');
        return;
    }
    const pos = await GeoLocation.getCurrentPositionAsync({
        accuracy: GeoLocation.Accuracy.Balanced,
    });
    const { latitude: user_lat, longitude: user_lon } = pos.coords;

    try {
        const response = await fetch(
            `${BASE_URL}/find_kebab?user_lat=${user_lat}&user_lon=${user_lon}`
        );
        alert("Your location: lat => " + user_lat + " and long => " + user_lon);
        return await response.json(); // { message, http_status }
    } catch (err) {
        console.log(err);
        alert("ERROR: Error while contacting the backend!");
        return null;
    }
}