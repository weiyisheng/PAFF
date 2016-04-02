/**
 * @providesModule PAFFCell
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

function CellTitle(props) {
  return (
    <View style={styles.cell}>
      <Text>{props.title}</Text>
    </View>
  );
}

function Cell(props) {
  if (props.type === 'title') {
    return (
      <View style={styles.cell}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>{props.title}</Text>
        <Text style={styles.cellContent}>{props.content}</Text>
      </View>
    );
  }
}
Cell.propTypes = {
  type: PropTypes.oneOf(['title', 'item']),
};
Cell.defaultPropTypes = {
  type: 'item',
};

function CellSeparator(props) {
  return (
    <View style={styles.separator}>
    </View>
  );
}

function CellListView(props) {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
}

function detectChange(r1, r2) {
  return r1 !== r2;
}

const defaultStyle = {
  paddingVertical: 18,
  paddingHorizontal: 16,
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '200',
  },
  cell: {
    paddingVertical: defaultStyle.paddingVertical,
    paddingHorizontal: defaultStyle.paddingHorizontal,
  },
  cellTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  cellContent: {
    fontSize: 18,
    fontWeight: '200',
  },
  separator: {
    marginHorizontal: defaultStyle.paddingHorizontal,
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
  }
});

Cell.Title = CellTitle;
Cell.Separator = CellSeparator;
Cell.ListView = CellListView;
Cell.DataSourceParam = {
  rowHasChanged: detectChange,
  sectionHeaderHasChanged: detectChange,
}
module.exports = Cell;
