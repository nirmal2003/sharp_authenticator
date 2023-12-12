import {StyleSheet} from "react-native";
import {gray_color, main_color} from "../../styles/color";

const Styles = StyleSheet.create({
    services_container: {
        marginTop: 40,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        color: gray_color,
        fontSize: 20,
        marginHorizontal: 15
    },
    service_list: {
        paddingBottom: 60
    },
    service_list_item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        padding: 10
    },
    service_list_item_icon: {
        width: 60,
        height: 60,
        backgroundColor: main_color,
        borderRadius: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    service_list_item_icon_text: {
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        fontSize: 28
    },
    service_list_item_text: {
        marginLeft: 15
    },
    service_list_item_name: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: main_color
    },
    service_list_item_last_login: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: main_color
    },

    service_details_container: {
    },
    service_details_head: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: "#5424FD",
    },
    service_details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    service_details_icon: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: main_color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    service_details_icon_text: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30
    },
    service_details_text: {
        marginLeft: 10
    },
    service_details_name: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20
    },
    service_details_created_at: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },
    security_layers: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    security_layers_item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        marginRight: 10,
        marginTop: 10
    },
    security_layers_item_text: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },
    security_layers_item_icon: {
        marginLeft: 5
    },
    settings: {
        position: 'relative'
    },
    settings_icon: {
        position: 'absolute',
        right: 10,
        zIndex: 20
    },
    settings_menu: {
        position: 'absolute',
        right: 35,
        top: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        zIndex: 10
    },
    settings_list: {
    },
    settings_list_item: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        minWidth: 180,
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    settings_list_item_text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginTop: 2,
        marginLeft: 5
    }
});

export default Styles;