import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo = (props) => {
  // console.log('props',props);
  const Color = props?.color
  const data = props?.data?.data;
  const Header = props?.data;
  
  const dummyData = data?.map(item => {
    const colorData = Color?.find(item2 => (item2.id === item.id))
    if (colorData) {
      return { ...item, ...colorData }
    }
  })
  // console.log("dummyData", dummyData);

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: `${item?.color}`, borderLeftColor: `${item?.colorleft}` }]}>
      <View>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.value}>{item?.value} <Text style={styles.valuetype}>{item?.valuetype}</Text></Text>
        <Text style={styles.billing}>{item?.billing} per billing cycle</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.titleheader}>
      <View style={styles.header}><View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 1, top: 1 }}>{Header?.logo}</View><Text style={styles.headertitle}>{Header.headers}</Text></View>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  billing:{
    fontWeight:'400',
    fontFamily:'Cairo',
    fontStyle:'normal',
    fontSize:12,
    lineHeight:22,
    color:'#252525'
  },
  value:{
    fontFamily:'Cairo',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize:15,
    lineHeight:28,
    color:'#666666'
  },
  valuetype:{
    fontSize:12,
    fontWeight:'300',
    lineHeight:22
  },
  titleheader: {
    marginTop: 18,
  },
  item: {
    // padding: 20,
    paddingHorizontal:20,
    paddingVertical:14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.75,
    borderLeftWidth: 5,
    // borderLeftColor:"red"
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight:30,
    fontFamily:'Cairo',
    fontStyle:'normal',
    color:'#050505'
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