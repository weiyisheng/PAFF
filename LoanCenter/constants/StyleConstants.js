const React = require('react-native')
const { Dimensions } = React

let{ width, height } = Dimensions.get('window')
let widthScale = width / 375
let heightScale = height / 667

module.exports = {
  Black: "#101010",
  Yellow: "#E97000",
  Red: "#E10202",
  Blue: "#19AAB8",
  DarkBlue: "#4876FF",
  Gray1: "#f4f4f4",
  Gray2: "#dadada",
  Gray3: "#c1c1c1",
  Gray4: "#787878",
  BorderColor: "#dadada",
  TextBlack: "#101010",
  TextYellow: "#EEB422",
  TextRed: "#E10202",
  TextOrange: "#FFD700",
  ButtonBackgroundColor: "#EEB422",
  WindowWidth: width,
  WindowHeight: height,
  WidthScale: widthScale,
  HeightScale: heightScale,
  ContainerNomalPadding: 15,
  ContainerBackgroundColor: {
    backgroundColor: '#ffffff'
  },
  BorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  BorderTop: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0'
  },
  BorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#e0e0e0'
  },
  BorderRight: {
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0'
  },
  TextColorBlack: {
    opacity: 0.9,
    color: '#262626'
  },
  NextBtn: {
    width: 260 * widthScale,
    height: 54 * heightScale,
    borderRadius: 27 * heightScale,
    backgroundColor: "#EEB422"
  }
}
