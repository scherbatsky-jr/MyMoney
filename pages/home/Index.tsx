import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                <Button
                    title="My Accounts"
                    onPress={() => navigation.navigate('Accounts')}
                />
            </View> 
        </ScrollView>
    );
};

export default Home;
