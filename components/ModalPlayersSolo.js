import React from 'react';
import Modal from "react-native-modal";
import {Button, TextInput} from "react-native";
import styled from "styled-components/native";

const ContentModal = styled.View`
  //height: 25%;
  width: 100%;
  background-color: #fcfcfc;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`

const TextWinner = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`

const ModalPlayersSolo = ({openModal, refresh, setPlayersGame, playersGame}) => {

    const toggleModal = () => {
        refresh()
    };

    return (
        <Modal isVisible={openModal} backdropOpacity={0.5} style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ContentModal>
                <TextWinner>{'Представьтесь'}</TextWinner>
                <TextInput placeholder={'Введите ник игрока X'} style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    width: '100%',
                    padding: 10,
                }} onChangeText={(text) => setPlayersGame({
                    ...playersGame,
                    player1: text
                })} value={playersGame.player1}/>
                <Button style={{
                    width: '100%'
                }} title="Сохранить" onPress={toggleModal}/>
            </ContentModal>
        </Modal>
    );
};

export default ModalPlayersSolo;
