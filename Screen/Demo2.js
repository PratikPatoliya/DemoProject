import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Image } from "react-native-svg";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Demo2 = (props) => {
  console.log(props);
  const Color = props.color;
  const Data = props.data.data;
  const Header = props.data;


  const dummyData = Data.map(i =>{
    const colorData = Color.find(j =>(i.id === j.id))
    if (colorData) {
      return{...i,...colorData}
    }
  })

  // console.log("dummyDatadummyDatadummyData",dummyData);


  const renderItem = ({ item }) => (
    <View style={[styles.item,{backgroundColor:`${item.color}` ,borderLeftColor:`${item.colorleft}`}]}>
        <Text style={styles.title}>{item.title} {item.valuetype}  of water consumption</Text>
    </View>
  );

  return (
    <View style={styles.titleheader}>
      <View style={styles.header}>{Header.logo}<Text style={styles.headertitle}>{Header.headers}</Text></View>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

export default Demo2

const styles = StyleSheet.create({
  titleheader: {
    marginTop: 18,
  },
  item: {
    // padding: 28,
    height:height*0.1,
    marginBottom: 8,
    opacity:0.80,
    borderLeftWidth:5,
    justifyContent:'center'
  },
  title: {
    fontSize: 13.5,
    marginLeft:width*0.07,
    lineHeight:16,
    fontWeight:'400',
    fontFamily:'Roboto',
    fontStyle:'normal',
    color:'#666666',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  headertitle: {
    fontSize: 16,
    marginLeft: 14,
    fontWeight:'600',
    lineHeight:30,
    color:'#101126',
    fontFamily:'Cairo',
    fontStyle:'normal'
  },
})