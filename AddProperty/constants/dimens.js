const React = require('react-native')
const { Dimensions, Platform } = React

let{ width, height } = Dimensions.get('window')

module.exports = {
  WindowWidth: width,
  WindowHeight: height,
  ContainerNomalPadding: 15
}
