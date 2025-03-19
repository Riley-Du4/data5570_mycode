// src/components/Index.js
import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../state/userSlice";  // adjust path as necessary
import { useRouter } from 'expo-router';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;

}
const router = useRouter();

const Index = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);

    // Dispatch form data to Redux store
    dispatch(setFormData(data));

    Alert.alert("Success", "Form submitted!");
    reset();
  };

  const navigateTostate = () => {
    router.push('./state/')
  };

  return (
    <View style={{ padding: 20, backgroundColor: "#556B2F", flex: 1, justifyContent: "center" }}>
      <View style={{ backgroundColor: "#C3B091", padding: 20, borderRadius: 10 }}>
        <Text style={{ color: "#2E2E2E", fontWeight: "bold", marginBottom: 5 }}>First Name</Text>
        <Controller
          control={control}
          name="first_name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={{ borderWidth: 1, borderColor: "#2E2E2E", backgroundColor: "#F5F5DC", padding: 8, marginBottom: 10 }}
            />
          )}
        />

        <Text style={{ color: "#2E2E2E", fontWeight: "bold", marginBottom: 5 }}>Last Name</Text>
        <Controller
          control={control}
          name="last_name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={{ borderWidth: 1, borderColor: "#2E2E2E", backgroundColor: "#F5F5DC", padding: 8, marginBottom: 10 }}
            />
          )}
        />

        <Text style={{ color: "#2E2E2E", fontWeight: "bold", marginBottom: 5 }}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              style={{ borderWidth: 1, borderColor: "#2E2E2E", backgroundColor: "#F5F5DC", padding: 8, marginBottom: 10 }}
            />
          )}
        />

        <Text style={{ color: "#2E2E2E", fontWeight: "bold", marginBottom: 5 }}>Phone Number</Text>
        <Controller
          control={control}
          name="phone_number"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              style={{ borderWidth: 1, borderColor: "#2E2E2E", backgroundColor: "#F5F5DC", padding: 8, marginBottom: 10 }}
            />
          )}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} color="#2E2E2E" />
        <Button title="Go to Image" onPress={navigateTostate} color="#2E2E2E" />
      </View>
    </View>
  );
};

export default Index;
