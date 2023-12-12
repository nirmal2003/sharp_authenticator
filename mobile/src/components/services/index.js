import React from "react";
import {ScrollView, Text, View} from "react-native";
import Styles from "./styles";
import ServiceList from "./list";

const Services = () => {
    return (
        <View style={Styles.services_container}>
            <Text style={Styles.title}>Connected Services</Text>
            <ScrollView>
                <ServiceList/>
            </ScrollView>
        </View>
    )
}

export default Services;