import { ScrollView, Button } from 'react-native';
import { sendUserLocation } from "../../utils/user_position";

export default function userLocation() {
    return (
        <ScrollView style={{backgroundColor: "gray"}}>
          <Button title={"Press me to get the user location!"} onPress={ sendUserLocation }/>
        </ScrollView>
    )
}