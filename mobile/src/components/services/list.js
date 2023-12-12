import React from "react";
import {View} from "react-native";
import ServiceListItem from "./list_item";
import Styles from "./styles";

const ServiceList = () => {
    return (
        <View style={Styles.service_list}>
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
        </View>
    )
}

export default ServiceList;