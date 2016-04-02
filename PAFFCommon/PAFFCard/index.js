/**
 * @providesModule PAFFCard
 */
var React = require('react-native');

var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
  PropTypes,
} = React;

function PAFFCard(props) {
  return (
    <View style={styles.panel}>
      {props.children}
    </View>
  );
}

function PAFFCardHeader(props) {
  return (
    <View style={styles.header}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  }
});

PAFFCard.Header = PAFFCardHeader;

module.exports = PAFFCard;
