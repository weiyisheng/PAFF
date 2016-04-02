/**
 * @providesModule PAFFNavBar
 * 
 * 配置项
 * 
 *  title: string,
 *  onBackPressed: func, // params: event
 *  onClosePressed: func, // params: event
 *  menuIcons: arrayOf(oneOfType([
 *    Image.source, 
 *    shape({
 *      type: oneOf(['more', 'search', 'user']),
 *    })
 *  ])),
 *  onMenuSelected: func, // params: index, event
 */

var React = require('react-native');
var {
  Text,
  View,
  Platform,
  TouchableOpacity,
  PropTypes,
  Image,
  StyleSheet,
} = React;

const isAndroid       = (Platform.OS === 'android');
const statusBarHeight = isAndroid ? 0 : 20;
const titleBarHeight  = isAndroid ? 56 : 44;
const contentHeight   = 24;
const titleFontSize   = 20;
const controlFontSize = 18;
const standardPadding = 6;
const controlWidth    = 36;
const backIconWidth   = 18
const iconWidth       = contentHeight;
const titleColor      = '#333333';

const standardImage = {
  more: require('./img/menu.png'),
  search: require('./img/search.png'),
  user: require('./img/user.png'),
}

function makeMenuPress(i, callback) {
  return (event) => {
    callback(i, event);
  }
}

function HFNavBar(props) {
  let left;
  let right;
  let leftWidth = 0;
  let rightWidth = 0;
  if (props.onBackPressed) {
    left = [];
    left.push(
      <TouchableOpacity key={'back'} 
                        onPress={props.onBackPressed}>
        <View style={styles.backButton}>
          <Image source={require('./img/back.png')}
                 style={styles.backIcon}
          />
          <Text style={[styles.control, styles.backText]}>返回</Text>
        </View>
      </TouchableOpacity>
    );
    leftWidth += (2 * standardPadding + controlWidth + backIconWidth);
    // 只有返回键才能显示关闭键
    if (props.onClosePressed) {
      left.push(
        <TouchableOpacity key={'close'} 
                          onPress={props.onClosePressed}>
          <Text style={styles.control}>关闭</Text>
        </TouchableOpacity>
      );
      leftWidth += (standardPadding + controlWidth);
    }
  }
  if (props.onMenuSelected && props.menuIcons) {
    let rightContent = [];
    for (let i = 0, l = props.menuIcons.length; i < l; i++) {
      let menuItem = props.menuIcons[i];
      let source;
      if (menuItem.type) {
        source = standardImage[menuItem.type];
      } else {
        source = menuItem;
      }
      rightContent.push(
        <TouchableOpacity key={`${i}`}
                          onPress={makeMenuPress(i, props.onMenuSelected)}
        >
          <View style={styles.menuItem}>
            <Image source={source}
                   style={styles.menuIcon}
            />
          </View>
        </TouchableOpacity>
      );
      rightWidth += (iconWidth + standardPadding);
    }
    rightWidth += (2 * standardPadding);
    right = (
      <View style={styles.menuArea}>{rightContent}</View>
    );
  }
  let widthDiff = leftWidth - rightWidth;
  let titleStyleEx;
  if (widthDiff > 0) {
    titleStyleEx = {
      marginRight: widthDiff,
    };
  } else {
    titleStyleEx = {
      marginLeft: -widthDiff,
    };
  }
  let title;
  if (props.title) {
    title = (
      <Text style={[styles.title, titleStyleEx]}
            numberOfLines={1}
      >
        {props.title}
      </Text>
    );
  }
  return (
    <View style={styles.content}>
      {left}
      {title}
      {right}
    </View>
  );
}

HFNavBar.propTypes = {
  title: PropTypes.string,
  onBackPressed: PropTypes.func,
  onClosePressed: PropTypes.func,
  menuIcons: PropTypes.arrayOf(PropTypes.oneOfType([
    Image.propTypes.source, 
    PropTypes.shape({
      type: PropTypes.oneOf(['more', 'search', 'user']),
    })
  ])),
  onMenuSelected: PropTypes.func,
}

// HFNavBar.defaultProps = {
//   contentHeight  : 24,
//   titleFontSize  : 20,
//   controlFontSize: 18,
//   standardPadding: 6,
//   controlWidth   : 36,
//   backIconWidth  : 1,
//   iconWidth      : contentHeight,
//   titleColor     : '#333333',
// }

// Const
HFNavBar.HEIGHT = statusBarHeight + titleBarHeight;

const styles = StyleSheet.create({
  content: {
    marginTop: statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    height: titleBarHeight,
  },
  title: {
    fontSize: titleFontSize,
    color: titleColor,
    textAlign: 'center',
    flex: 1,
  },
  control: {
    fontSize: controlFontSize,
    color: titleColor,
    width: controlWidth,
    fontWeight: '300',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: standardPadding,
  },
  backIcon: {
    width: backIconWidth,
    height: contentHeight,
    resizeMode: 'contain',
    tintColor: titleColor,
  },
  backText: {
    marginRight: standardPadding,
  },
  closeText: {
    marginRight: standardPadding,
  },
  menuArea: {
    marginRight: 2 * standardPadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    marginLeft: standardPadding,
  },
  menuIcon: {
    width: iconWidth,
    height: contentHeight,
    resizeMode: 'contain',
    tintColor: titleColor,
  },
});
module.exports = HFNavBar;
