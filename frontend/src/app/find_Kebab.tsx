import { ScrollView, Button, useWindowDimensions } from 'react-native';
import { getUserLocation } from "../../utils/user_position";
import getStili from "./_styles";

export default function userLocation() {
  const { width } = useWindowDimensions();
  const stili = getStili(width);
  return (
    <ScrollView style={stili.mainWindow}>
      <Button title={"Press me to get the user location!"} onPress={ getUserLocation }/>
    </ScrollView>
  )
}