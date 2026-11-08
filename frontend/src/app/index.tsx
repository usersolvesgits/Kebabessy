import { ScrollView,
         Text,
         useWindowDimensions,
         Pressable,
         Image } from 'react-native';
import { Link } from 'expo-router';
import getStili from './_styles';

export default function Index() {
  const { width }  = useWindowDimensions();
  const stili = getStili(width);
  return (
    <ScrollView style={stili.mainWindow}>
      <Text style={stili.title}>
        Kebabessy
      </Text>
      <Text style={stili.centerText}>
        <Text style={stili.citation}>
          To thee who searches <Text style={stili.bold}>Him</Text>,{"\n"}
          Heaven shall be given once thou hast bitten into <Text style={stili.bold}>Him</Text>.
        </Text>
      </Text>

      <Link href={"/find_Kebab"} asChild>
        <Pressable style={stili.kebabBtn}>
          <Image
            source={require("@/assets/images/app/kebab.png")}
            style={stili.kebabImage}
            resizeMode="contain"/>
        </Pressable>
      </Link>
      <Text style={stili.centerText}>
        <Text style={stili.smallCitation}>
          -The Kebab is watching you.
        </Text>
      </Text>

    </ScrollView>
  )
}