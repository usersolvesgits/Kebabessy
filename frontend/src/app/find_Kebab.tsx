import {
  ScrollView,
  useWindowDimensions,
  Pressable,
  Text, } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import getStili from './_styles';
import { getUserLocation, KebabInfo } from '../../utils/user_position';

export default function userLocation() {
  const [kebabInfo, updateKebabInfo] = useState<KebabInfo | null>(null);
  const { width } = useWindowDimensions();
  const stili = getStili(width);
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
        <>
          <Text style={[stili.centerText, {margin: 20}]}>
            { kebabInfo.name }{"\n"}
            { kebabInfo.address }{"\n"}
            { kebabInfo.coordinates }{"\n"}
          </Text>
        </>
      )}
    </ScrollView>
  )
}