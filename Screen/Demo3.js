import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Arrow from '../img/Arrow';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Demo3 = (props) => {
    // console.log("props",props.data);
    const data = props.data;
    return (
        <View>
            <View style={[styles.mainBox, { borderBottomLeftRadius:data.borderBottom, borderBottomRightRadius:data.borderBottom, borderTopLeftRadius:data.borderTop, borderTopRightRadius:data.borderTop, }]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.icon,{backgroundColor:data.iconColor}]}>{data.logo}</View>
                    <View style={{ marginLeft: 21 }}>
                        <Text style={styles.header}>{data.header}</Text>
                        <Text style={styles.headerBottom}>{data.kwh}<Text style={styles.headerBottomInSite}>{data.type}</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:11 }}>
                    <View style={{flexDirection:'row'}}>
                        <View style={[styles.band,{backgroundColor:data.bandColor,borderLeftColor:data.bandLeftColor}]}>
                            <Text style={styles.bandFont}>{data.band}</Text>
                        </View>
                        <Text style={styles.month}>reached this month</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.learn}>Learn more</Text>
                        <Arrow />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Demo3;

const styles = StyleSheet.create({
    mainBox: {
        backgroundColor: '#FFFFFF',
        height: height * 0.18,
        padding: 20,
        marginBottom:1
    },
    icon: {
        height: 50,
        width: 50,
        opacity: 0.5,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    header: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        fontFamily: 'Roboto',
    },
    headerBottom: {
        fontSize: 32,
        fontWeight: '400',
        lineHeight: 44,
        fontFamily: 'Cairo',
        color: '#101126',
        marginTop: 5
    },
    headerBottomInSite: {
        fontFamily: 'Cairo',
        color: '#101126',
        fontSize: 16,
        fontWeight: '600',
        // lineHeight:24

    },
    band: {
        height: 20,
        width: 56,
        borderLeftWidth: 7,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bandFont: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 13,
        color: '#252525',
        fontFamily: 'Cairo',
    },
    btn:{
        flexDirection:'row',
    },
    month:{
        fontSize:12,
        lineHeight:18,
        fontWeight:'400',
        color:'#000000',
        fontFamily:'Cairo',
        marginLeft:11
    },
    learn:{
        fontSize:14,
        lineHeight:18,
        fontWeight:'600',
        fontFamily:'Cairo',
        color:'#32767C',
    }
})