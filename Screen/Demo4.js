import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ElectricityWhite from '../img/ElectricityWhite';
import Water from '../img/water';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const data = [
    {
        id: 1,
        height: 200
    },
    {
        id: 2,
        height: 500
    },
    {
        id: 3,
        height: 400
    },
]
const data1 = [
    {
        id: 1,
        height: 300
    },
    {
        id: 2,
        height: 200
    },
    {
        id: 3,
        height: 550
    },
]
const data2 = [
    {
        id: 1,
        height: 200
    },
    {
        id: 2,
        height: 500
    },
    {
        id: 3,
        height: 400
    },
]

const Color = [
    {
        id: 1,
        color: '#FFF6EF',
        colorleft: '#FAE6D7'
    },
    {
        id: 2,
        color: '#FFF2EA',
        colorleft: '#F5CFB8',
    },
    {
        id: 3,
        color: '#FFDCC9',
        colorleft: '#EEAF8C'
    },
    {
        id: 4,
        color: '#FFCDB6',
        colorleft: '#E89169'
    }
]
const dummyData = data.map(i => {
    const colorData = Color.find(j => (i.id === j.id))
    if (colorData) {
        return { ...i, ...colorData }
    }
})
const dummyData1 = data1.map(i => {
    const colorData = Color.find(j => (i.id === j.id))
    if (colorData) {
        return { ...i, ...colorData }
    }
})
const dummyData2 = data2.map(i => {
    const colorData = Color.find(j => (i.id === j.id))
    if (colorData) {
        return { ...i, ...colorData }
    }
})

// console.log("dummyDatadummyDatadummyData", dummyData);
const Demo4 = () => {


    const renderItem = ({ item, index }) => (
        <View>
            <View style={{ width: 35, height: item.height * 0.08, backgroundColor: item.color, borderTopRightRadius: index === 0 ? 10 : 0, borderTopLeftRadius: index === 0 ? 10 : 0, borderBottomLeftRadius: index === (dummyData.length - 1) ? 10 : 0, borderBottomRightRadius: index === (dummyData.length - 1) ? 10 : 0 }}></View>
        </View>
    );
    const renderItem1 = ({ item, index }) => (
        <View>
            <View style={{ width: 35, height: item.height * 0.08, backgroundColor: item.color, borderTopRightRadius: index === 0 ? 10 : 0, borderTopLeftRadius: index === 0 ? 10 : 0, borderBottomLeftRadius: index === (dummyData1.length - 1) ? 10 : 0, borderBottomRightRadius: index === (dummyData1.length - 1) ? 10 : 0 }}></View>
        </View>
    );
    const renderItem2 = ({ item, index }) => (
        <View>
            <View style={{ width: 35, height: item.height * 0.08, backgroundColor: item.color, borderTopRightRadius: index === 0 ? 10 : 0, borderTopLeftRadius: index === 0 ? 10 : 0, borderBottomLeftRadius: index === (dummyData2.length - 1) ? 10 : 0, borderBottomRightRadius: index === (dummyData2.length - 1) ? 10 : 0 }}></View>
        </View>
    );

    return (
        <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 16, backgroundColor: '#FFFFFF', height: height * 0.1, borderTopStartRadius: 14, borderTopRightRadius: 14, marginBottom: 1 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.usage}>Usage  (kWh)</Text>
                </View>
                <View style={{ backgroundColor: '#EDEDED', height: 52, width: 130, borderRadius: 31, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, paddingHorizontal: 4 }}>
                    <View style={{ backgroundColor: '#32767C', height: 40, width: 65, borderRadius: 31, justifyContent: 'center', alignItems: 'center' }}>
                        <ElectricityWhite />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: 65 }}>
                        <Water />
                    </View>
                </View>
            </View>

            <View style={{ height: 215, backgroundColor: '#FFFFFF', paddingVertical: 25,  }}>

                <View style={{ paddingHorizontal: 11.4,justifyContent:'flex-end',alignContent:'flex-end' }}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', width: width * 0.88, flexDirection: 'row' }}>
                        <View style={{ paddingLeft: 50 }}>
                            <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
                        </View>
                        <View style={{ paddingLeft: 70, }}>
                            <FlatList data={dummyData1} renderItem={renderItem1} keyExtractor={item => item.id} />
                        </View>
                        <View style={{ paddingLeft: 80 }}>
                            <FlatList data={dummyData2} renderItem={renderItem2} keyExtractor={item => item.id} />
                        </View>
                    </View>
                </View>

                <View style={{justifyContent: 'flex-end'}}>

                    <View style={{ paddingHorizontal: 39.2, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.date}>11 Aug - 10 Oct </Text>
                            <Text style={styles.year}>2022</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>11 Aug - 10 Oct </Text>
                            <Text style={styles.year}>2022</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>11 Aug - 10 Oct </Text>
                            <Text style={styles.year}>2022</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFFFFF', height: height * 0.1, borderBottomLeftRadius: 14, borderBottomRightRadius: 14, marginTop: 1 }}>
                <Text style={styles.show}>Show period</Text>
                <View style={styles.monthBorder}>
                    <Text style={styles.monthText}>3 Mths</Text>
                </View>
                <View style={styles.monthBorder}>
                    <Text style={styles.monthText}>6 Mths</Text>
                </View>
                <View style={styles.monthBorder}>
                    <Text style={styles.monthText}>12 Mths</Text>
                </View>
                <View style={styles.monthBorder}>
                    <Text style={styles.monthText}>24 Mths</Text>
                </View>
            </View>
        </View>
    )
}

export default Demo4;

const styles = StyleSheet.create({
    year: {
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 19,
        textTransform: 'uppercase',
        color: '#666666',
        textAlign: 'center'
    },
    date: {
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 19,
        textTransform: 'uppercase',
        color: '#101126'
    },
    usage: {
        color: '#101126',
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
    },
    show: {
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#6F6F6F',
        lineHeight: 15,
        fontSize: 10,
        justifyContent: 'center',
        top: 6
    },
    monthBorder: {
        width: width * 0.13,
        height: height * 0.04,
        backgroundColor: '#EDEDED',
        borderRadius: 26,
        justifyContent: 'center',
    },
    monthText: {
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 12,
        color: '#6F6F6F',
        textAlign: 'center'
    },
})