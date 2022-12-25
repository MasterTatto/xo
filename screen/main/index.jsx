import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";

const MainBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  //border-color: red;
  //border-width: 1px;
`

const NavigateItem = styled.TouchableOpacity`
  width: 70%;
  height: 70px;
  border-color: gray;
  border-width: 2px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: gray;
`

const NavigateText = styled.Text`
  color: #fff
`

const Home = ({navigation}) => {
    console.log('wow')
    return (
        <MainBox>

            <NavigateItem onPress={() => {
                navigation.navigate('SoloGame')
                // console.log('hello')
            }}>
                <NavigateText>Solo game</NavigateText>
            </NavigateItem>

            <NavigateItem onPress={() => {
                navigation.navigate('DuoGame')
                // console.log('hello')
            }}>
                <NavigateText>Duo game</NavigateText>
            </NavigateItem>

            <NavigateItem onPress={() => {
                navigation.navigate('DuoGame')
                // console.log('hello')
            }}>
                <NavigateText>Online game</NavigateText>
            </NavigateItem>

            <NavigateItem onPress={() => {
                navigation.navigate('DuoGame')
                // console.log('hello')
            }}>
                <NavigateText>Language</NavigateText>
            </NavigateItem>

        </MainBox>
    );
};

export default Home;
