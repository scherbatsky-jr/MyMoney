import React from "react";
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import type { AccountType } from "../../types";
import Account from "./_components/Account";

const accounts: Array<AccountType> = [
    {
        id: 1,
        name: "Nepal Investment Mega Bank",
        current_balance: 125000,
        curreny: "Rs"
    },
    {
        id: 2,
        name: "Airwallex",
        current_balance: 1250,
        curreny: "$"
    },
]

const Accounts = ({navigation}): JSX.Element => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Your Accounts</Text>
            <ScrollView style={styles.accountList}>
                <FlatList
                    data={accounts}
                    renderItem={({item}) => <Account {...item} />}
                />
            </ScrollView>
            <Button
                title="Add a new account"
                onPress={() => navigation.navigate("AddAccount")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    accountContainer: {
        marginBottom: 10
    },
    accountList: {
        flex: 1
    },
    page: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default Accounts;
