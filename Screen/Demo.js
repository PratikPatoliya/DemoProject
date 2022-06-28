import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Demo = (props) => {
  const data = props?.data
  const Color = props.color

  // const dummyData = data?.map(item => {
  //   const colorData = Color?.find(item2 => (item2?.bandId === item?.bandId))
  //   if (colorData) {
  //     return { ...item, ...colorData }
  //   }
  // })
  // console.log("dummyDatadummyData", dummyData);


  const renderItem = ({ item }) => {
    const colorData = Color?.find(item2 => (item2?.bandId === item?.bandId))
    const idata= {...item , ...colorData}
    return (

      <View style={[styles.item, { backgroundColor:`${idata.color}`, borderLeftColor: `${idata?.colorleft}` }]}>
        <View>
          <Text style={styles.title}>Band {idata?.bandId}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.value}>{idata?.amount} {props.headers == 'Electricity Tariff' ? <Text style={styles.valuetype}>fils/kWh</Text> : <Text style={styles.valuetype}>AED/m3</Text>} </Text>
          <Text style={styles.billing}>{idata?.consumptionRange} {props.headers == 'Electricity Tariff' ? <Text style={styles.valuetype}>kWh</Text> : <Text style={styles.valuetype}>m3</Text>} per billing cycle</Text>
        </View>
      </View>
    )
  }

  const renderItem1 = (amount) => {
    return (
      <View style={[styles.item1, { backgroundColor: `#E5F3F5`, borderLeftColor: `#298289` }]}>
        <Text style={styles.title1}>Fixed tarrif {amount} AED per m3</Text>
      </View>
    )
  }

  return (
    <View style={styles.titleheader}>
      <View style={styles.header}><View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 1, top: 1 }}>{props?.logo}</View><Text style={styles.headertitle}>{props?.headers}</Text></View>
      {data?.tariffInfo ? <FlatList data={data?.tariffInfo} renderItem={renderItem} /> : renderItem1(data?.amount)}
      {/* <FlatList data={data} renderItem={(data) => renderitem(data)}  /> */}
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  billing: {
    fontWeight: '400',
    fontFamily: 'Cairo',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 22,
    color: '#252525'
  },
  value: {
    fontFamily: 'Cairo',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 28,
    color: '#666666'
  },
  valuetype: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 22
  },
  titleheader: {
    marginTop: 18,
  },
  item: {
    // padding: 20,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.75,
    borderLeftWidth: 5,
    // borderLeftColor:"red"
  },
  item1: {
    // padding: 28,
    height: height * 0.1,
    marginBottom: 8,
    opacity: 0.80,
    borderLeftWidth: 5,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 30,
    fontFamily: 'Cairo',
    fontStyle: 'normal',
    color: '#050505'
  },
  title1: {
    fontSize: 13.5,
    marginLeft: width * 0.07,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#666666',
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
    fontWeight: '600',
    lineHeight: 30,
    color: '#101126',
    fontFamily: 'Cairo',
    fontStyle: 'normal'
  },
})