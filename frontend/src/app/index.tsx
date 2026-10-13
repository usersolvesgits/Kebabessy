import { ScrollView } from "react-native";
import { Link } from 'expo-router';
import getStili from './_styles'

const stili = getStili();

export default function Index() {
  return (
      <ScrollView style={{backgroundColor: "gray"}}>
        <Link  style={stili.center} href={"/api"}>Press me to get in the api page!</Link>
      </ScrollView>
  )
}