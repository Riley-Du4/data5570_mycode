import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Card, Title, Paragraph } from "react-native-paper";

const DisplayUserData = () => {
  const userData = useSelector((state) => state.user.formData); // Adjust if your slice name is different

  if (!userData?.first_name) {
    return (
      <View style={styles.center}>
        <Paragraph>No user data available</Paragraph>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="User Info" />
        <Card.Content>
          <Title>{`${userData.first_name} ${userData.last_name}`}</Title>
          <Paragraph>Email: {userData.email}</Paragraph>
          <Paragraph>Phone: {userData.phone_number}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DisplayUserData;
