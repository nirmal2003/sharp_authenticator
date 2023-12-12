import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Styles from "./styles";
import Navbar from "./navbar";
import Hero from "./hero";
import History from "./history";

const Home = () => {
    return (
        <ScrollView>
            <Navbar />
            <Hero />
            <History />
        </ScrollView>
    )
}

export default Home;