const React = require('react-native')
const { Dimensions } = React

let{ width, height } = Dimensions.get('window')
let widthScale = width/375
let heightScale = height/667

module.exports = {
  WindowWidth: width,
  WindowHeight: height,
  WidthScale: widthScale,
  HeightScale: heightScale,
  TextColorBlack: {
    opacity: 0.9,
    color: '#262626'
  },
  Flex1: {
    flex: 1
  },
  ContainerNomalPadding: 17 * widthScale,
}
