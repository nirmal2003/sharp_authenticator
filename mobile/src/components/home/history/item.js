import React from "react";
import {Text, View} from "react-native";
import Styles from "../styles";

const HistoryListItem = () => {
    return (
        <View style={Styles.history_list_item}>
            <View style={Styles.history_list_item_icon}>
                <Text style={Styles.history_list_item_icon_text}>F</Text>
            </View>
            <View style={Styles.history_list_item_text}>
                <Text style={Styles.history_list_item_name}>Facebook</Text>
                <Text style={Styles.history_list_item_time}>07 Dec 2023 at 13.56 PM</Text>
            </View>
        </View>
    )
}

export default HistoryListItem;