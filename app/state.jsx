import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

const StateComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? "Hide Image" : "Show Image"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && (
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default ToggleImage;
