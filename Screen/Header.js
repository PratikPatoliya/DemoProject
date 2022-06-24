import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Back from '../img/Back';

const Header = props => {
  const {inamel, title, inamer1, inamer2, preasename2, rightname, isBack} =
    props;
  return (
    <View style={styles.views}>
      <View style={styles.flexrow}>
        <View style={styles.flexstart}>
          {/* left icon back */}
          <TouchableOpacity onPress={isBack}>
            {/* <Icon name={inamel} size={23} style={{color: colors.black}} /> */}
            <Back />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          {/* Text title */}
          <Text style={styles.titlefont}>{title}</Text>
        </View>
        <View style={styles.flexend}>
          <View style={styles.flexrow}>
            {/* Right side Icon */}
            <TouchableOpacity>
              <Icon name={inamer1} size={23} style={styles.iconstyle} />
              <Text style={styles.righttxt}>{rightname}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={preasename2}>
              <Icon name={inamer2} size={23} style={styles.iconstyle2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    views: {
      height: Platform.OS === 'ios' ? 100 : 50,
    //   backgroundColor: colors.black,
    },
    flexrow: {
      flex: 1,
      flexDirection: 'row',
    },
    flexend: {
      flex: 0.5,
      alignItems: 'flex-end',
      top: Platform.OS === 'ios' ? 30 : 15,
      right: Platform.OS === 'ios' ? 40 : 20,
    },
    flexstart: {
      flex: 0.5,
      alignItems: 'flex-start',
      top: Platform.OS === 'ios' ? 35 : 15,
      left: Platform.OS === 'ios' ? 20 : 10,
    },
    title: {
      flex: 3.5,
      justifyContent: 'center',
    },
    titlefont: {
      fontSize: 20,
      lineHeight:26,
      fontFamily:'Cairo',
      fontWeight: '600',
      color: colors.black,
    },
    iconstyle: {
      color: colors.white,
      right: Platform.OS === 'ios' ? 10 : 15,
      top: Platform.OS === 'ios' ? 10 : 0,
    },
    iconstyle2: {
      color: colors.white,
      top: Platform.OS === 'ios' ? 10 : 0,
      left: Platform.OS === 'ios' ? 20 : 15,
    },
    righttxt: {
      color: colors.yellow,
      fontSize: 20,
    },
  });