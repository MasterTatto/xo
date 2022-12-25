import React from 'react';
import {Button} from "react-native";
import Modal from "react-native-modal";
import styled from 'styled-components/native'

const ContentModal = styled.View`
  height: 15%;
  width: 100%;
  background-color: #fcfcfc;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`

const TextWinner = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`

const ModalNative = ({winner, isModalVisible, refresh}) => {
    const toggleModal = () => {
        refresh()
    };

    return (
        <Modal isVisible={isModalVisible} backdropOpacity={0.5} style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ContentModal>
                <TextWinner>{winner}</TextWinner>

                <Button style={{
                    width: '100%'
                }} title="Повторить" onPress={toggleModal}/>
            </ContentModal>
        </Modal>
    );

};

export default ModalNative;
