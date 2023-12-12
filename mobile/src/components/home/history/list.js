import React from "react";
import {View} from "react-native";
import HistoryListItem from "./item";
import Styles from "../styles";

const HistoryList = () => {
    return (
        <View style={Styles.history_list}>
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
            <HistoryListItem />
        </View>
    )
}

export default HistoryList;