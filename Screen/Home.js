import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = ({ navigation }) => {
  return (
    <View style={[styles.center,{marginTop:100}]}>
        <TouchableOpacity style={[styles.btn, styles.center]} onPress={() => navigation.navigate('Index')}>
          <Text>Go</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  btn: {
    height: height * 0.05,
    width: width * 0.3,
    backgroundColor: '#02ccfe',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})