import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Demo from './Demo'
import Demo2 from './Demo2'
import ElectricityImg from '../img/Electricity.js'
import WasteImg from '../img/Waste'
import WaterImg from '../img/water'
import WastewaterImg from '../img/Wastewater'
import Header from './Header'
import Demo3 from './Demo3'
import Electricity2 from '../img/Electricity2'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import GetUsageSummary from '../GetUsageSummary.json';
import GetUsageSummary1 from '../GetUsageSummary1.json';
import GetUsageSummary2 from '../GetUsageSummary2.json';
import GetUsageSummary3 from '../GetUsageSummary3.json';
import tariffBand from '../tariffBand.json'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;




// const Electricity = {
//     headers: 'Electricity Tariff',
//     logo: <ElectricityImg />,
//     data: [
//         {
//             id: 1,
//             title: 'Band 1',
//             billing: '0 – 2,000 kWh',
//             value: 28,
//             valuetype: 'fils/kWh',
//         },
//         {
//             id: 2,
//             title: 'Band 2',
//             billing: '2,000 – 4,000 kWh',
//             value: 33,
//             valuetype: 'fils/kWh',
//         },
//         {
//             id: 3,
//             title: 'Band 3',
//             billing: '4,000 – 6,000 kWh',
//             value: 38,
//             valuetype: 'fils/kWh',
//         },
//         {
//             id: 4,
//             title: 'Band 4',
//             billing: 'Over 6,000 kWh',
//             value: 43,
//             valuetype: 'fils/kWh',
//         },
//     ]
// }
const ElectricityColor = [
    {
        bandId: '1',
        color: '#FFF6EF',
        colorleft: '#FAE6D7'
    },
    {
        bandId: '2',
        color: '#FFF2EA',
        colorleft: '#F5CFB8',
    },
    {
        bandId: '3',
        color: '#FFDCC9',
        colorleft: '#EEAF8C'
    },
    {
        bandId: '4',
        color: '#FFCDB6',
        colorleft: '#E89169'
    }
]
// const Water = {
//     headers: 'Water Tariff',
//     logo: <WaterImg />,
//     data: [
//         {
//             id: 1,
//             title: 'Band 1',
//             billing: '0 - 27 m3',
//             value: 7.70,
//             valuetype: 'AED/m3',
//         },
//         {
//             id: 2,
//             title: 'Band 2',
//             billing: '27 - 55 m3',
//             value: 8.80,
//             valuetype: 'AED/m3',
//         },
//         {
//             id: 3,
//             title: 'Band 3',
//             billing: 'Over 55 m3',
//             value: 10.10,
//             valuetype: 'AED/m3',
//         },
//     ]

// }
const WaterColor = [
    {
        bandId: '1',
        color: '#E9F9FF',
        colorleft: '#CFF2FF'
    },
    {
        bandId: '2',
        color: '#DBF5FF',
        colorleft: '#A1DEF4'
    },
    {
        bandId: '3',
        color: '#CEF2FF',
        colorleft: '#68C3E5'
    },
    {
        bandId: '4',
        color: '#FFCDB6',
        colorleft: '#E89169'
    }
]


const Waste = {
    headers: 'Waste Tariff',
    logo: <WasteImg />,
    data: [
        {
            id: 1,
            title: '1.92',
            valuetype: 'AED per m3',
        },
    ]

}

const WasteColor = [
    {
        id: 1,
        color: '#D9D4CF',
        colorleft: '#845525'
    }
]

const Wastewater = {
    headers: 'Wastewater Tariff',
    logo: <WastewaterImg />,
    data: [
        {
            id: 1,
            title: '1.62',
            valuetype: 'AED per m3',
        },
    ]
}

const WastewaterColor = [
    {
        id: 1,
        color: '#F4F4F4',
        colorleft: '#CECECE'
    },
]

const ElectricityConsumption = {
    header: 'Electricity consumption',
    kwh: '6588',
    type: '.00 kWh',
    band: 'Band 4',
    bandColor: '#FFEEE7',
    bandLeftColor: '#E89169',
    iconColor: '#F4E3DB',
    borderTop: 16,
    borderBottom: 0,
    logo: <Electricity2 />
}
const WaterConsumption = {
    header: 'WaterConsumption',
    kwh: '118',
    type: '.00 m3',
    band: 'Band 3',
    bandColor: '#EFFBFF',
    bandLeftColor: '#68C3E5',
    iconColor: '#D6E3E5',
    borderTop: 0,
    borderBottom: 16,
    logo: <WaterImg />
}

const Index = ({ navigation }) => {

    const [btn, setBtn] = useState('RES')


    const RES = GetUsageSummary;
    const AGRIC = GetUsageSummary1;
    const COMRC = GetUsageSummary2;
    const RESNATIONAL = GetUsageSummary3;

    let AccountClass = btn

    switch (AccountClass) {
        case "RES":
            AccountClass = RES;
            break;
        case "AGRIC":
            AccountClass = AGRIC;
            break;
        case "COMRC":
            AccountClass = COMRC;
            break;
        case "RESNATIONAL":
            AccountClass = RESNATIONAL;
            break;
        default:
            AccountClass = 'not found';
            break;
    }

    const TariffTypeElectricity = AccountClass.TariffType.Electricity;
    let Electricity;
    switch (TariffTypeElectricity) {
        case "RES~E-UTRESD~NORMAL~APT":
            Electricity = tariffBand.nationalAPTElectricity
            break;
        case "AGRIC~E-UTAGRC~E-AGRIC-R~FARM":
            Electricity = tariffBand.agriAllElectricity
            break;
        case "COMRC~E-UTCOMR~E-COMMERCIAL~SHOP":
            Electricity = tariffBand.commercialAllElectricity
            break;
        case "RES~E-UTRESD~NATIONAL~VILLA":
            Electricity = tariffBand.nationalSocialElectricity
            break;
        default:
            break;
    }
    const electricity = Electricity;
    // console.log("datadatadatadata", data);


    const TariffTypeWater = AccountClass.TariffType.Water;
    let Water;
    switch (TariffTypeWater) {
        case "RES~W-UTRESD~NORMAL~APT":
            Water = tariffBand.nationalAPTWater
            break;
        case "AGRIC~W-UTAGRC~W-AGRIC-R~FARM":
            Water = tariffBand.agriAllWater
            break;
        case "COMRC~W-UTCOMR~E-COMMERCIAL~SHOP":
            Water = tariffBand.commercialAllWater
            break;
        case "RES~W-UTRESD~NATIONAL~VILLA":
            Water = tariffBand.nationalSocialWater
            break;
        default:
            break;
    }
    const water = Water;
    return (
        <View>
            <Header title="Understand your tariff" /* inamel="home" */ inamel="chevron-back-outline" isBack={() => navigation.goBack()} />
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[styles.btn, styles.center]} onPress={() => setBtn('RES')}>
                        <Text>RES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.center]} onPress={() => setBtn('AGRIC')}>
                        <Text>AGRIC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.center]} onPress={() => setBtn('COMRC')}>
                        <Text>COMRC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.center]} onPress={() => setBtn('RESNATIONAL')}>
                        <Text>RESNATIONAL</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 16, marginBottom: 80 }}>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>Your tariff is determined by the type of property you live in and whether you are a UAE National or an expatriate. </Text>
                    </View>
                    <View style={styles.box2}>
                        <View>
                            <Text style={styles.box2HeaderFont}>Your current tariff</Text>
                        </View>
                        <View>
                            <Text style={styles.box2Font}>Damac Villa A-29</Text>
                            <Text style={styles.box2Font}>Account: 23462764387</Text>
                        </View>
                    </View>
                    <Demo data={electricity} color={ElectricityColor} headers={'Electricity Tariff'} logo={<ElectricityImg />} />
                    <Demo data={water} color={WaterColor} headers={'Water Tariff'} logo={<WaterImg />} />
                    <Demo2 data={Waste} color={WasteColor} />
                    <Demo2 data={Wastewater} color={WastewaterColor} />
                    <View style={{ marginTop: 10 }}>
                        <Demo3 data={ElectricityConsumption} />
                        <Demo3 data={WaterConsumption} />
                    </View>
                    <Demo4 />
                    {/* <Demo5 AccountClass={AccountClass} color={ElectricityColor} headers={'Electricity Tariff'} logo={<ElectricityImg />} /> */}
                </View>
            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    btn: {
        height: height * 0.05,
        width: width * 0.25,
        backgroundColor: '#02ccfe',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: height * 0.15,
        borderRadius: 14,
        justifyContent: 'center',
        backgroundColor: '#d4ebee',
        opacity: 0.7,
        marginTop: 15,
    },
    boxText: {
        fontSize: 14,
        paddingHorizontal: 35,
        lineHeight: 21,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Cairo',
        color: "#101126",

    },
    box2: {
        backgroundColor: '#FFFFFF',
        // width:width*0.91,
        height: height * 0.17,
        borderRadius: 14,
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 20
    },
    box2HeaderFont: {
        color: '#101126',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Cairo',
    }
    , box2Font: {
        color: '#101126',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Cairo',
        lineHeight: 21,
    }
})