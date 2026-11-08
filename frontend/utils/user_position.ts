import * as GeoLocation from 'expo-location';
import { LocationObject } from "expo-location";
import { Platform } from 'react-native';

const BASE_URL: string = "http://localhost:8080";

export type KebabInfo = {
     name: string;
    address: string;
    coordinates: [number, number];
};

export async function getUserLocation(): Promise<KebabInfo | null> {
    let user_lat: number;
    let user_lon: number;

    if (Platform.OS === 'web') {
        try {
            const pos: GeolocationPosition = await getWebPosition();
            user_lat = pos.coords.latitude;
            user_lon = pos.coords.longitude;
        } catch (err) {
            alert('Geolocation error: could not get the position.');
            return null;
        }
    } else {
        const { status: geolocPermission } = await GeoLocation.requestForegroundPermissionsAsync();
        if (geolocPermission !== "granted") {
            alert('Geolocation error: User denied geolocation prompt.');
            return null;
        }

        const pos: LocationObject = await GeoLocation.getCurrentPositionAsync({
            accuracy: GeoLocation.Accuracy.Balanced
        });

        user_lat = pos.coords.latitude;
        user_lon = pos.coords.longitude;
    }

    console.log("Position:", user_lat, user_lon);

    const URL_BACKEND = `${BASE_URL}/find_kebab?user_lat=${user_lat}&user_lon=${user_lon}`;
    try {
        const response: Response = await fetch(URL_BACKEND, { method: "GET" });
        if (!response.ok) {
            return null;
        }
        return await response.json() as KebabInfo;
    } catch (err) {
        console.log(err);
        if (err instanceof TypeError) {
            alert("ERROR: Error while contacting the backend!\n" +
                  "The backend server might not be online!");
        } else {
            alert("ERROR: Error while contacting the backend!");
        }
        return null;
    }
}

function getWebPosition(): Promise<GeolocationPosition> {
    return new Promise((found, notFound) =>
      navigator.geolocation.getCurrentPosition(found, notFound, {
          timeout: 1_500/*ms*/,
          enableHighAccuracy: true,
          maximumAge: 0,
      })
    );
}