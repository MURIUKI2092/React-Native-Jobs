import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

//@icons
import Icon from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";
//@components
import Welcome from "../components/home/welcome/welcome";
const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F6" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#F9F5F6",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="bars" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity styles={styles.btnContainer} onPress={{}}>
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatarImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                  }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 16,
          }}
        >
                  <Text>Holaaaa</Text>
                  <Welcome/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 30,
    width: 50,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    marginTop: 30,
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 5,
  }),
});

export default Home;
