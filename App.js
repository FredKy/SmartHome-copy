import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { useState } from "react";

//import ButtonSwitch from "./src/ButtonSwitch";

export default function App() {
  const [devicesOn, setDevicesOn] = useState(0);

  const [lampState, setLampState] = useState("Off");
  const [lampLight, setLampLight] = useState("red");

  const [heaterState, setHeaterState] = useState("Off");
  const [heaterLight, setHeaterLight] = useState("red");

  const [tvState, setTVState] = useState("Off");
  const [tvLight, setTVLight] = useState("red");

  const handlePress = () => console.log("Test");
  const buttonOneOn = () => {
    if (lampState == "Off") {
      setLampLight("green");
      setLampState("On");
      setDevicesOn(devicesOn + 1);
    } else if (lampState == "On") {
      console.log("The lamp is already on.");
    }
  };
  const buttonOneOff = () => {
    if (lampState == "Off") {
      console.log("The lamp is already turned off.");
    } else if (lampState == "On") {
      setLampLight("red");
      setLampState("Off");
      setDevicesOn(devicesOn - 1);
    }
  };
  const buttonTwoOn = () => {
    if (heaterState == "Off") {
      setHeaterLight("green");
      setHeaterState("On");
      setDevicesOn(devicesOn + 1);
    } else if (heaterState == "On") {
      console.log("The heater is already on.");
    }
  };
  const buttonTwoOff = () => {
    if (heaterState == "Off") {
      console.log("The heater is already turned off.");
    } else if (heaterState == "On") {
      setHeaterLight("red");
      setHeaterState("Off");
      setDevicesOn(devicesOn - 1);
    }
  };
  const buttonThreeOn = () => {
    if (tvState == "Off") {
      setTVLight("green");
      setTVState("On");
      setDevicesOn(devicesOn + 1);
    } else if (tvState == "On") {
      console.log("The TV is already on.");
    }
  };
  const buttonThreeOff = () => {
    if (tvState == "Off") {
      console.log("The TV is already turned off.");
    } else if (tvState == "On") {
      setTVLight("red");
      setTVState("Off");
      setDevicesOn(devicesOn - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: 200,
            height: 100,
            //backgroundColor: "green",
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={require("./assets/house.png")}
          />
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: "cadetblue" }}
          >
            SmartHome
          </Text>
        </View>
        <View
          style={{
            width: 380,
            height: 170,
            //backgroundColor: "green"
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}> Rooms</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              //backgroundColor: "yellow",
            }}
          >
            <View style={styles.pictureFrame}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("./assets/living-room.png")}
              />
              <Text>Living Room</Text>
            </View>
            <View style={styles.pictureFrame}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("./assets/bed.png")}
              />
              <Text>Bedroom</Text>
            </View>
            <View style={styles.pictureFrame}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("./assets/kitchen.png")}
              />
              <Text>Kitchen</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 380,
            height: 170,
            //backgroundColor: "blue"
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}> Devices</Text>
          <View
            style={{
              width: 380,
              height: 350,
              //backgroundColor: "red",
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.bars}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ width: 25, height: 25, backgroundColor: lampLight }}
                ></View>
                <Text style={{ fontSize: 20 }}> {"  "}Living Room Lamp</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={buttonOneOn}>
                  <Text style={styles.buttonText}>On</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={buttonOneOff}>
                  <Text style={styles.buttonText}>Off</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bars}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: heaterLight,
                  }}
                ></View>
                <Text style={{ fontSize: 20 }}> {"  "}Heater</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={buttonTwoOn}>
                  <Text style={styles.buttonText}>On</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={buttonTwoOff}>
                  <Text style={styles.buttonText}>Off</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bars}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ width: 25, height: 25, backgroundColor: tvLight }}
                ></View>
                <Text style={{ fontSize: 20 }}> {"  "}TV</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={buttonThreeOn}>
                  <Text style={styles.buttonText}>On</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={buttonThreeOff}
                >
                  <Text style={styles.buttonText}>Off</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {" "}
                Total Devices On: {+devicesOn}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  pictureFrame: {
    backgroundColor: "mediumturquoise",
    width: 115,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bars: {
    width: 380,
    height: 90,
    backgroundColor: "lemonchiffon",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 14,
    borderColor: "lemonchiffon",
  },
  button: {
    backgroundColor: "white",
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "steelblue",
  },
});
