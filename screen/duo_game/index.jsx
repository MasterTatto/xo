import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, StyleSheet, Text, View} from "react-native";
import ModalNative from "../../components/Modal";
import ModalPlayers from "../../components/ModalPlayers";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

const XoView = styled.View`
  height: 302px;
  width: 100%;
  border-color: #bdbaba;
  border-width: 1px;
  flex-wrap: wrap;
`

const ShadowO = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border-color: rgb(44, 236, 53);
  border-width: 9px;
`
const ShadowX1 = styled.View`
  height: 70px;
  width: 5px;
  border-radius: 5px;
  border-color: rgba(236, 44, 79, 0.73);
  border-width: 5px;
`

const XoBox = styled.TouchableOpacity`
  height: 100px;
  width: 33.6%;
  border-color: #bdbaba;
  background-color: #000;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const DuoGame = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [openModalSetNames, setOpenModalSetNames] = useState(false);

    const [isLoading, setIsLoading] = useState(false)
    const [playersGame, setPlayersGame] = useState({
        player1: 'x',
        player2: 'o'
    })
    console.log(playersGame)
    const [players, setPlayers] = useState('')
    const [winner, wetWinner] = useState('')
    // console.log(playersGame)
    console.log(players)
    const [items, setItems] = useState([
        {id: 1, value: ''},
        {id: 2, value: ''},
        {id: 3, value: ''},
        {id: 4, value: ''},
        {id: 5, value: ''},
        {id: 6, value: ''},
        {id: 7, value: ''},
        {id: 8, value: ''},
        {id: 9, value: ''},
    ])

    const handleCloseSelectedNames = () => {
        setPlayers(playersGame.player1)
        setIsLoading(true)
        setOpenModalSetNames(false)
        setTimeout(() => setIsLoading(false), 1000)
    }

    const refresh = () => {
        setIsLoading(true)
        setItems([
            {id: 1, value: ''},
            {id: 2, value: ''},
            {id: 3, value: ''},
            {id: 4, value: ''},
            {id: 5, value: ''},
            {id: 6, value: ''},
            {id: 7, value: ''},
            {id: 8, value: ''},
            {id: 9, value: ''},
        ])

        setPlayers(playersGame.player1)
        setTimeout(() => setIsLoading(false), 10)
        setModalVisible(false)
        wetWinner('')
    }

    useEffect(() => {
        if (
            //vertical
            (items[0].value === 'x' && items[1].value === 'x' && items[2].value === 'x') ||
            (items[3].value === 'x' && items[4].value === 'x' && items[5].value === 'x') ||
            (items[6].value === 'x' && items[7].value === 'x' && items[8].value === 'x') ||
            //horizontal
            (items[0].value === 'x' && items[3].value === 'x' && items[6].value === 'x') ||
            (items[1].value === 'x' && items[4].value === 'x' && items[7].value === 'x') ||
            (items[2].value === 'x' && items[5].value === 'x' && items[6].value === 'x') ||
            //ygol
            (items[0].value === 'x' && items[4].value === 'x' && items[8].value === 'x') ||
            (items[2].value === 'x' && items[4].value === 'x' && items[6].value === 'x')
        ) {
            setModalVisible(true)
            wetWinner(`Выиграл игрок <${players === playersGame.player1 ? playersGame.player2 : playersGame.player1}>`)
        }

        if (
            //vertical
            (items[0].value === 'o' && items[1].value === 'o' && items[2].value === 'o') ||
            (items[3].value === 'o' && items[4].value === 'o' && items[5].value === 'o') ||
            (items[6].value === 'o' && items[7].value === 'o' && items[8].value === 'o') ||
            //horizontal
            (items[0].value === 'o' && items[3].value === 'o' && items[6].value === 'o') ||
            (items[1].value === 'o' && items[4].value === 'o' && items[7].value === 'o') ||
            (items[2].value === 'o' && items[5].value === 'o' && items[6].value === 'o') ||
            //ygol
            (items[0].value === 'o' && items[4].value === 'o' && items[8].value === 'o') ||
            (items[2].value === 'o' && items[4].value === 'o' && items[6].value === 'o')
        ) {
            setModalVisible(true)
            wetWinner(`Выиграл игрок <${players === playersGame.player1 ? playersGame.player2 : playersGame.player1}>`)
        }

        if (items.filter((f) => f.value !== '')?.length === 9) {
            setModalVisible(true)
            wetWinner('У вас ничья')
        }

    }, [items])

    useEffect(() => {
        setOpenModalSetNames(true)
    }, [])

    if (isLoading) {
        return <LoadingView>
            <ActivityIndicator size={'large'}/>
            <Text style={{
                marginTop: 15
            }}>Loading...</Text>
        </LoadingView>
    }

    return (
        <RefreshControl style={{
            flex: 1,
            width: '100%'
        }}
                        refreshing={isLoading} onRefresh={() => {
            refresh()
            setPlayersGame({
                player1: '',
                player2: ''
            })
        }}
        >
            {isModalVisible &&
                <ModalNative winner={winner} refresh={refresh} setModalVisible={setModalVisible}
                             isModalVisible={true}/>}

            <ModalPlayers playersGame={playersGame} setPlayersGame={setPlayersGame} openModal={openModalSetNames}
                          refresh={handleCloseSelectedNames}/>

            <View style={styles.container}>
                <Text style={{
                    color: '#fff'
                }}>{`Ходит ${winner !== '' ? winner.split(' ')[2].replace('>', '').replace('<', '') : players}`}</Text>
                <XoView>
                    {items.map((el) => {
                        return <XoBox key={el.id}
                                      onPress={() => {
                                          console.log(players)
                                          if (el.value === 'x' || el.value === 'o') return
                                          setItems(items.map((item) => item.id === el.id ? ({
                                              ...item,
                                              value: players === playersGame.player1 ? 'x' : 'o',
                                              playerName: players
                                          }) : item))
                                          setPlayers(players === playersGame.player1 ? playersGame.player2 : playersGame.player1)

                                      }}
                        >
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // }}>{el.value}</Text>
                            }}>
                                {el.value === 'o' &&
                                    <View style={styles.neon}>
                                        <ShadowO/>
                                    </View>
                                }
                                {el.value === 'x' &&
                                    <View style={{
                                        position: 'relative',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <View style={styles.neon2}>
                                            <ShadowX1/>
                                        </View>
                                        <View style={styles.neon3}>
                                            <ShadowX1/>
                                        </View>
                                    </View>

                                }
                            </View>
                        </XoBox>

                    })}
                </XoView>

                <StatusBar style="auto"/>
            </View>

        </RefreshControl>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    neon: {
        shadowRadius: 100,
        height: 85,
        flex: 1,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,236,53,0.68)',
        shadowOffset: {x: 20, y: 500},
        shadowOpacity: 1,
        elevation: 9,
        // backgroundColor: 'black',
        borderRadius: 85,
        borderColor: 'rgba(255,255,255,0)',
        borderWidth: 3
    },
    neon2: {
        shadowRadius: 20,
        height: 71,
        width: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgb(236,44,79)',
        shadowOffset: {x: 20, y: 500},
        shadowOpacity: 1,
        elevation: 9,
        borderRadius: 85,
        borderColor: 'rgb(236,44,79)',
        borderWidth: 2,
        position: 'absolute',
        transform: [{rotate: "40deg"}]
    },
    neon3: {
        shadowRadius: 20,
        height: 71,
        width: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgb(236,44,79)',
        shadowOffset: {x: 20, y: 500},
        shadowOpacity: 1,
        elevation: 9,
        borderRadius: 85,
        borderColor: 'rgb(236,44,79)',
        borderWidth: 2,
        position: 'absolute',
        transform: [{rotate: "-40deg"}]
    }
});

export default DuoGame;
