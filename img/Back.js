
import * as React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

const Back = (props) => {
    return (
        <View>
            <Svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G>
                    <Path d="M3.61239 9.85748L11.289 2.18059C11.7886 1.68124 11.7886 0.873862 11.289 0.374512C10.7897 -0.124837 9.98232 -0.124837 9.48297 0.374512L1.80608 8.0514L0 9.85748L1.80608 11.6636L9.48297 19.3404C9.73206 19.5895 10.059 19.7147 10.386 19.7147C10.713 19.7147 11.04 19.5895 11.289 19.3404C11.7886 18.8411 11.7886 18.0337 11.289 17.5344L3.61239 9.85748Z" fill="#101126"/>
                </G>
            </Svg>
        </View>
    )
}

export default Back;