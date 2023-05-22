import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { AccountType } from "../../../types";

const Account = (account: AccountType): JSX.Element => {
    return (
        <View style={styles.accountContainer}>
            <Text style={styles.accountName}>{account.name}</Text>
            <Text>{`Current Balance: ${account.curreny} ${account.current_balance}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    accountContainer: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        padding: 15,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.1,
        shadowRadius: 0
    },
    accountName: {
        fontSize: 20,
        marginBottom: 5
    }
})

export default Account;
