import React from "react";
import {Text, View} from "react-native";
import Styles from "./styles";

const Navbar = () => {
    return (
        <View style={Styles.navbar}>
            <Text style={Styles.logo}>Sharp</Text>
            <View style={Styles.profile_icon}>
                <Text style={Styles.profile_image_text}>N</Text>
            </View>
        </View>
    )
}

export default Navbar;