import { Button, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";

const ButtonSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      {/* Container */}
      <View style={style.boxContainer}>
        <View style={style.info}>
          <View style={style.infoSection}>
            <View style={[style.squareImg, { backgroundColor: isOn }]}>
              putSquareImageHere
            </View>
            <Text style={style.deviceText}>Heater</Text>
          </View>
          <View style={style.buttons}>
            <Button color="purple" title="On" onPress={() => {}} />
            <Button color="purple" title="Off" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#999",
    margin: "2rem",
  },
  infoSection: {
    backgroundColor: "#888",
    margin: "2rem",
    flexDirection: "row",
  },
  info: {
    backgroundColor: "#777",
    margin: "2rem",
    flexDirection: "row",
  },

  squareImg: {
    backgroundColor: "#666",
    margin: "2rem",
  },

  deviceText: {
    backgroundColor: "#555",
    margin: "2rem",
  },
  buttons: {
    backgroundColor: "#444",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default ButtonSwitch;
