import * as React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

const Arrow = (props) => {
    return (
        <View>
            <Svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G>
                    <Path d="M6.02682 14.9873C5.74221 14.659 5.72188 14.1413 5.96583 13.786L6.02682 13.707L9.912 9.22651L6.02682 4.74511C5.74221 4.41683 5.72188 3.89914 5.96583 3.5438L6.02682 3.46484C6.31142 3.13655 6.76024 3.1131 7.0683 3.39449L7.13676 3.46484L11.5765 8.58593C11.8611 8.91422 11.8815 9.43191 11.6375 9.78725L11.5765 9.86621L7.13676 14.9873C6.83026 15.3408 6.33332 15.3408 6.02682 14.9873Z" fill="#101126" />
                </G>
            </Svg>
        </View>
    )
}

export default Arrow;