import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../screen/main";
import DuoGame from "../screen/duo_game";
import SoloGame from "../screen/solo_game";

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Главная'}}
                />
                <Stack.Screen name="DuoGame" options={{title: 'Игра вдвоем'}} component={DuoGame}/>
                <Stack.Screen name="SoloGame" options={{title: 'Игра с ботом'}} component={SoloGame}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;
