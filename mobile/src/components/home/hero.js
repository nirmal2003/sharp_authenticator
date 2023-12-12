import React from "react";
import {Text, View} from "react-native";
import Styles from "./styles";

const Hero = () => {
    return (
        <View style={Styles.hero_container}>
            <View style={Styles.hero_section}>
                <View style={Styles.sec1}>
                    <Text style={Styles.text_sm}>Good Morning!</Text>
                    <Text style={Styles.text_md}>Nirmal salinda</Text>
                </View>

                <View style={Styles.sec2}>
                    <View style={Styles.stats}>
                        <Text style={Styles.text_md}>6</Text>
                        <Text style={Styles.text_sm}>Services</Text>
                    </View>
                    <View style={Styles.stats}>
                        <Text style={Styles.text_md}>2</Text>
                        <Text style={Styles.text_sm}>Today</Text>
                    </View>
                    <View style={Styles.stats}>
                        <Text style={Styles.text_md}>1</Text>
                        <Text style={Styles.text_sm}>Accounts</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Hero;