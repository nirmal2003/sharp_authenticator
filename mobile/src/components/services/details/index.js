import React, {useEffect, useState} from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import Styles from "../styles";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import SettingsMenu from "./settings_menu";

const ServiceDetails = () => {
    const [openSettings, setOpenSettings] = useState(false);


    return (
        <View style={Styles.service_details_container}>
            <View style={Styles.service_details_head}>
                <View style={Styles.settings}>
                    <View style={Styles.settings_icon}>
                        <TouchableNativeFeedback>
                            <MaterialIcons name="settings" size={24} color="white" onPress={() => setOpenSettings(!openSettings)}/>
                        </TouchableNativeFeedback>
                    </View>
                    {openSettings && (
                        <SettingsMenu/>
                    )}
                </View>
                <TouchableNativeFeedback>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableNativeFeedback>
                <View style={Styles.service_details}>
                    <View style={Styles.service_details_icon}>
                        <Text style={Styles.service_details_icon_text}>F</Text>
                    </View>
                    <View style={Styles.service_details_text}>
                        <Text style={Styles.service_details_name}>Facebook</Text>
                        <Text style={Styles.service_details_created_at}>created at 22 Sep 2023</Text>
                    </View>
                </View>
                <View style={Styles.security_layers}>
                    <View style={Styles.security_layers_item}>
                        <Text style={Styles.security_layers_item_text}>Finger print</Text>
                        <AntDesign style={Styles.security_layers_item_icon} name="check" size={15} color="white"/>
                    </View>
                    <View style={Styles.security_layers_item}>
                        <Text style={Styles.security_layers_item_text}>PIN Number</Text>
                        <AntDesign style={Styles.security_layers_item_icon} name="check" size={15} color="white"/>
                    </View>
                    <View style={Styles.security_layers_item}>
                        <Text style={Styles.security_layers_item_text}>OTP</Text>
                        <AntDesign style={Styles.security_layers_item_icon} name="check" size={15} color="white"/>
                    </View>
                    <View style={Styles.security_layers_item}>
                        <Text style={Styles.security_layers_item_text}>Face ID</Text>
                        {/*<AntDesign style={Styles.security_layers_item_icon} name="check" size={24} color="black" />*/}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ServiceDetails;