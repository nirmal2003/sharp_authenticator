import React from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import Styles from "../styles";
import {MaterialIcons} from "@expo/vector-icons";
import {main_color} from "../../../styles/color";

const SettingsMenu = () => {
    return (
        <View style={Styles.settings_menu}>
            <View style={Styles.settings_list}>
                <TouchableNativeFeedback>
                    <View style={Styles.settings_list_item}>
                        <MaterialIcons name="block" size={17} color={main_color} />
                        <Text style={Styles.settings_list_item_text}>Block Service</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={Styles.settings_list_item}>
                        <MaterialIcons name="delete" size={17} color="red" />
                        <Text style={Styles.settings_list_item_text}>Delete Service</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default SettingsMenu;