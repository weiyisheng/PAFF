const React = require('react-native')
const { Dimensions, PixelRatio } = React

let{ width, height } = Dimensions.get('window')
let widthScale = width / 375
let heightScale = height / 667

module.exports = {
  Black: "#101010",
  Yellow: "#E97000",
  Red: "#E60012",
  Blue: "#3399ff",
  DarkBlue: "#4876FF",
  LightBlue: "#CCFFFF",
  LightGreen: "#336633",
  Gray1: "#e0e0e0",
  Gray2: "#D7D7D7",
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
    color: '#333333'
  },
  TextColorLightBlack: {
    color: '#999999'
  },
  NextBtn: {
    width: 240 * widthScale,
    height: 49 * heightScale,
    borderRadius: 24.5 * heightScale,
    backgroundColor: "#E60012"
  },
  NextBtnShort: {
    width: 146 * widthScale,
    height: 44 * heightScale,
    borderRadius: 22 * heightScale,
    backgroundColor: "#E60012"
  },
  RenturnBtnShort: {
    width: 146 * widthScale,
    height: 44 * heightScale,
    borderRadius: 22 * heightScale,
    backgroundColor: "#3399ff"
  },
  NextBtnNoBgColor: {
    width: 240 * widthScale,
    height: 49 * heightScale,
    borderColor: "#E60012",
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 24.5 * heightScale,
  },
  NextBtnNoBgColorShort: {
    width: 146 * widthScale,
    height: 44 * heightScale,
    borderColor: "#E60012",
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 22 * heightScale,
  }
}
