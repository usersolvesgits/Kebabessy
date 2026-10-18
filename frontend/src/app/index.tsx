import { ScrollView, Text } from "react-native";
import { Link } from 'expo-router';
import getStili from './_styles'

const stili = getStili();

export default function Index() {
  return (
      <ScrollView style={{backgroundColor: "gray"}}>
        <Link  style={stili.center} href={"/test_api"}>Press me to get in the api page!</Link>
        <Text>  </Text>
        <Link  style={stili.center} href={"/test_userLocation"}>Press me to get in the user location page!</Link>
      </ScrollView>
  )
}