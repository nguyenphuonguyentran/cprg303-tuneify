import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

const Toggle = () => {
  const [currentToggle, setCurrentToggle] = useState(
    require("../../assets/toggleoff.png")
  );

  const changeToggle = () => {
    if (currentToggle === require("../../assets/toggleoff.png")) {
      setCurrentToggle(require("../../assets/toggleon.png"));
    } else {
      setCurrentToggle(require("../../assets/toggleoff.png"));
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={changeToggle}>
        <Image
          resizeMode="contain"
          source={currentToggle}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;
