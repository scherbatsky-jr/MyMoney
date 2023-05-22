import React from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

const AddAccount = () => {
    return (
        <View>
            <Text>Add a new account</Text>
            <ScrollView>
                <View>
                    <Text>Account Name</Text>
                    <TextInput
                        placeholder="Enter the account name"
                    />
                </View>
                <View>
                    <Text>Current Balance</Text>
                    <TextInput placeholder="Enter the current balance"/>
                </View>
                <Button title="Add" />
            </ScrollView>
        </View>
    );
};

export default AddAccount;
