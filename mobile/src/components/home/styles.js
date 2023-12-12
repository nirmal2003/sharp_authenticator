import {StyleSheet} from "react-native";
import {gray_color, main_color} from "../../styles/color";

const Styles = StyleSheet.create({
    navbar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40
    },
    logo: {
        marginLeft: 15,
        fontFamily: 'Poppins-SemiBold',
        color: main_color,
        fontSize: 20
    },
    profile_icon: {
        marginRight: 15,
        width: 40,
        height: 40,
        backgroundColor: main_color,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_image_text: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 3,
        fontSize: 20
    },

    hero_container: {
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 25,
    },
    hero_section: {
        width: '100%',
        height: 'fit-content',
        backgroundColor: main_color,
        borderRadius: 10,
        padding: 15
    },
    sec1: {},
    text_sm: {
        fontFamily: 'Poppins-Regular',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12
    },
    text_md: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 19
    },
    sec2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    stats: {
        display: 'flex',
        alignItems: 'center'
    },

    history_container: {
        marginTop: 25,
        paddingHorizontal: 15
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: gray_color
    },
    history_list: {
        paddingBottom: 20
    },
    history_list_item: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25
    },
    history_list_item_icon: {
        width: 40,
        height: 40,
        backgroundColor: main_color,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    history_list_item_icon_text: {
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        fontSize: 20
    },
    history_list_item_text: {
        marginLeft: 10
    },
    history_list_item_name: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: main_color
    },
    history_list_item_time: {
        fontFamily: 'Poppins-Regular',
        color: main_color
    }
});

export default Styles;