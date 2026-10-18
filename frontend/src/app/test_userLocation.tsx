import { ScrollView, Button } from 'react-native';
import { sendUserLocation } from "@/functions/user_position";

export default function userLocation() {

    return (
        <ScrollView>
          <Button title={"Press me to get the user location!"} onPress={ sendUserLocation }/>
        </ScrollView>
    )
}