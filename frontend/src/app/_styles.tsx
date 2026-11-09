import { StyleSheet } from 'react-native';

const getStili = (width: number) => {
  const imageSize: number = Math.min(width * 0.8, 400);
  const fontSize: number = findFontSizeTitle(width);

  return StyleSheet.create({
    mainWindow: {
      backgroundColor: "#121212"
    },

    centerText: {
      textAlign: "center",
      color: "#f1f6f2",
      fontSize: fontSize/2.5,
    },
    title: {
      textAlign: "center",
      alignSelf: "center",
      fontWeight: "bold",
      color: "#f1f6f2",
      marginTop: 25,
      marginBottom: 25,
      fontSize: fontSize
    },

    citation: {
      fontStyle: "italic",
    },
    smallCitation: {
      fontStyle: "italic",
      fontSize: fontSize/3
    },
    bold: {
      fontWeight: "bold",
    },

    kebabBtn: {
      alignSelf: "center",
      marginTop: 40
    },
    kebabImage: {
      width: imageSize,
      height: imageSize,
      borderRadius: 20
    },

    btnFindKebab: {
      alignSelf: "center",
      marginTop: 30,
      backgroundColor: "#2c2c2c",
      paddingVertical: 14,
      paddingHorizontal: 28,
      borderRadius: 20
    },
    btnPressed: {
      opacity: 0.7
    },
    btnText: {
      color: "#f1f6f2",
      fontWeight: "bold",
      fontSize: 18,
      alignContent: "center",
      textAlign: "center"
    },

    mapStyle: {
      borderWidth: 4,
      borderStyle: "solid",
      borderColor: "#f1f6f2",
      width: width/1.5,
      height: width/3,
      alignSelf: "center",
      marginBottom: 40
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