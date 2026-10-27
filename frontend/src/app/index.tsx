import { ScrollView, Text, useWindowDimensions } from "react-native";
import { Link } from 'expo-router';

import getStili from './_styles';

export default function Index() {
  const { width }  = useWindowDimensions();
  const stili = getStili(width);
  return (
    <ScrollView style={stili.mainWindow}>
        <Link style={stili.title} href={"/find_Kebab"} onPress={ () => { console.log("Hello World!"); } }>
          Kebabessy
        </Link>
        <Text style={stili.centerText}>
          <cite>To thee who searches <b>Him</b>,<br/>
                Heaven shall be given once thou hast bitten into <b>Him</b>.</cite>
        </Text>
    </ScrollView>
  )
}