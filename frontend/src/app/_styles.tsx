import { StyleSheet } from 'react-native';

const getStili = (width: number) => {
  return StyleSheet.create({
    mainWindow: {
      backgroundColor: "#121212"
    },
    centerText: {
      textAlign: "center",
      color: "#f1f6f2",
      fontSize: findFontSizeTitle(width)/2.5
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#f1f6f2",
      marginTop: 25,
      marginBottom: 25,
      fontSize: findFontSizeTitle(width)
    }
  });
}
export default getStili;

function findFontSizeTitle(width: number): number {
  if (width < 600) {
    return 34;
  } else if (width < 1024) {
    return 42;
  }
  return 60;
}