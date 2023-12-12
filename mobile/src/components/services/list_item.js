import React from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import Styles from "./styles";

const ServiceListItem = () => {
    return (
        <TouchableNativeFeedback>
            <View style={Styles.service_list_item}>
                <View style={Styles.service_list_item_icon}>
                    <Text style={Styles.service_list_item_icon_text}>F</Text>
                </View>
                <View style={Styles.service_list_item_text}>
                    <Text style={Styles.service_list_item_name}>Facebook</Text>
                    <Text style={Styles.service_list_item_last_login}>01 Nov 2023 at 11.54 AM</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ServiceListItem;