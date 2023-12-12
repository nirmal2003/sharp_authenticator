import React from "react";
import {Text, View} from "react-native";
import Styles from "../styles";
import HistoryList from "./list";

const History = () => {
    return (
        <View style={Styles.history_container}>
            <Text style={Styles.title}>Login history</Text>
            <HistoryList />
        </View>
    )
}

export default History;