import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/home";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import ServicesScreen from "./src/screens/services";
import ServiceDetailsScreen from "./src/screens/services/details";

SplashScreen.preventAutoHideAsync();

const App = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView}>
            {/*<HomeScreen />*/}
            {/*<ServicesScreen />*/}
            <ServiceDetailsScreen />
        </View>
    );
}

export default App;
