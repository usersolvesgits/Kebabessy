import {
  ScrollView,
  useWindowDimensions,
  Pressable,
  Text,
  Platform } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { WebView } from 'react-native-webview';
import getStili from './_styles';
import { getUserLocation, KebabInfo } from '../../utils/user_position';

export default function userLocation() {
  const { width } = useWindowDimensions();
  const stili = getStili(width);

  const [kebabInfo, updateKebabInfo] = useState<KebabInfo | null>(null);
  const platform = Platform.OS;
  return (
    <ScrollView style={stili.mainWindow}>
      <Link href={'/'} style={stili.title}>
        Kebabessy
      </Link>

      <Pressable onPress={async () => { updateKebabInfo(await getUserLocation()) }}
                 style={({ pressed }) => [stili.btnFindKebab, pressed && stili.btnPressed]}>
        <Text style={stili.btnText}>
          Press me to get the kebab information!
        </Text>
      </Pressable>
      { kebabInfo && (
        viewMapKebab(platform, stili, kebabInfo)
      )}
    </ScrollView>
  )
}
function viewMapKebab(platform: string, stili: any, kebabInfo: KebabInfo) {
  if (platform !== "web") {
    return (
      <>
        <Text style={[stili.centerText, {margin: 20}]}>
          Name: {kebabInfo.name}{"\n"}
          Address: {kebabInfo.address}{"\n"}
          Coordinates: {kebabInfo.coordinates[0]}; {kebabInfo.coordinates[1]}{"\n"}
        </Text>
        <WebView style={stili.mapStyle} source={{ uri: `https://maps.google.com/maps?q=${kebabInfo.coordinates[0]},${kebabInfo.coordinates[1]}&t=m&z=16&ie=UTF8&iwloc=B&output=embed`}}></WebView>
      </>
    )
  } else {
    return (
      <>
        <Text style={[stili.centerText, {margin: 20}]}>
          Name: {kebabInfo.name}{"\n"}
          Address: {kebabInfo.address}{"\n"}
          Coordinates: {kebabInfo.coordinates[0]}; {kebabInfo.coordinates[1]}{"\n"}
        </Text>
        <iframe src={`https://maps.google.com/maps?q=${kebabInfo.coordinates[0]},${kebabInfo.coordinates[1]}&t=m&z=16&ie=UTF8&iwloc=B&output=embed`}
                style={stili.mapStyle} title={"Kebab map"} loading={"lazy"}></iframe>
      </>
    )
  }
}