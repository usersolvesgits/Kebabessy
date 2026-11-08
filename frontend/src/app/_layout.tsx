import { View,
         Text,
         Pressable,
         Modal,
         StyleSheet,
         useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Link, Stack } from 'expo-router';
import getStili from './_styles';

const Layout = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const { width } = useWindowDimensions()
  const stili = getStili(width);

  return (
    <View style={{flex: 1}}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#2c2c2c",
        },
        headerTintColor: "#f1f6f2",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
        <Stack.Screen name={"index"} options={{title:"Homepage"}}/>
        <Stack.Screen name={"find_Kebab"} options={{title:"Kebab Finder"}}/>
      </Stack>

      <Pressable style={({ pressed }) => [helpButtonStyles.helpButton, pressed && stili.btnPressed]}
                 onPress={() => setHelpOpen(true)}>
        <Text style={helpButtonStyles.helpButtonText}>?</Text>
      </Pressable>
      <Modal
        visible={helpOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setHelpOpen(false)}
      >
        <View style={helpButtonStyles.overlay}>
          <View style={helpButtonStyles.helpBox}>
            <Text style={helpButtonStyles.helpTitle}>Help</Text>
            <Text style={helpButtonStyles.helpText}>
              <Text style={stili.bold}>Sauce</Text> is Peace.{"\n"}
              <Text style={stili.bold}>Hunger</Text> is Slavery.{"\n"}
              <Text style={stili.bold}>Meat</Text> is Strength.{"\n"}
              <Text style={stili.bold}>The Kebab is watching you.</Text>{"\n"}{"\n"}

              1. On the Home page, tap The overseeing Kebab.{"\n"}
              2. On the Kebab Finder page, press the button.{"\n"}
              3. Allow location access when asked, and the information of the nearest Kebab will show up.{"\n"}
              4. To go back to the Home page, press the "Kebabessy" title.
            </Text>
            <Pressable style={helpButtonStyles.closeButton}
                       onPress={() => setHelpOpen(false)}>
              <Text style={helpButtonStyles.helpButtonText}>Close</Text>
            </Pressable>
            <Text style={helpButtonStyles.helpSmallText}>-Press{" "}
              <Link style={helpButtonStyles.helpSmallTextUnderlined}
                    href={"https://github.com/usersolvesgits/Kebabessy"}
                    target="_blank">
                here
              </Link>
              {" "}to go to the original repository
            </Text>

          </View>
        </View>

      </Modal>
    </View>
  )
}
export default Layout;

const helpButtonStyles = StyleSheet.create({
  helpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2c2c2c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  helpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpBox: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  helpTitle: {
    color: '#f1f6f2',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  helpText: {
    color: '#f1f6f2',
    fontSize: 16,
    marginBottom: 20,
  },
  helpSmallText: {
    color: '#3B3B3B',
    fontSize: 13,
    marginTop: 10,
  },
  helpSmallTextUnderlined: {
    color: '#3B3B3B',
    fontSize: 13,
    marginTop: 10,
    textDecorationLine: "underline"
  },
  closeButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
});