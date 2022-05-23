import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Fonts } from "@/theme/Fonts";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: Fonts.Roboto900,
                fontSize: 24
            }}>Splash</Text>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});