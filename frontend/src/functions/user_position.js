import * as GeoLocation from 'expo-location';

export async function sendUserLocation() {
    const URL_ENDPOINT = "http://localhost:8080/user_location";

    const { status } = await GeoLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        alert('GeoLocation request not granted!');
        return;
    }
    const pos = await GeoLocation.getCurrentPositionAsync({
        accuracy: GeoLocation.Accuracy.Balanced,
    });

    try {
        await fetch(URL_ENDPOINT, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_lat: pos.coords.latitude,
                user_lon: pos.coords.longitude,
            })
        }).then((response) => response.json());
    } catch(err) {
        console.log(err);
        alert("ERROR: Error while sending the geolocation to backend!");
        return;
    }

    alert("Your location: lat => " + pos.coords.latitude + " and long => " + pos.coords.longitude)

    return [pos.coords.latitude, pos.coords.longitude];
}