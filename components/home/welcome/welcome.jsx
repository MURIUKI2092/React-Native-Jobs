import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { useRouter } from "expo-router";
//fonts
import { FONT } from "../../../constants/theme";
const Welcome = () => {
    const router = useRouter()
    return (
        <View>
            <View>
                <Text style={styles.userName}>
                    Hello James
                </Text>
                <Text style={styles.title}>
                    Welcome to the Home Screen
                </Text>

            </View>
            <View>
                <View>
                    <TextInput>

                    </TextInput>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    userName: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color:"black"
    },
    title: {
        fontSize: 30,
        fontFamily: FONT.bold,
        
        
    }
})

export default Welcome;