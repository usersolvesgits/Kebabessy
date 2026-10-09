import { ScrollView } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
      <ScrollView style={{backgroundColor: 'gray'}}>
          <Link href={"/api"}>Press me to get in the api page!</Link>
      </ScrollView>
  )
}