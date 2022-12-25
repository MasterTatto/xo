import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native'
import {useEffect, useState} from "react";

const XoView = styled.View`
  height: 302px;
  width: 100%;
  border-color: #bdbaba;
  border-width: 1px;
  flex-wrap: wrap;
`

const XoBox = styled.TouchableOpacity`
  height: 100px;
  width: 33.6%;
  border-color: #bdbaba;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [players, setPlayers] = useState('one')
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

        setPlayers('one')
        setTimeout(() => setIsLoading(false), 1000)
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
            alert('Player one win!!!')
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
            alert('Player two win!!!')
        }
    }, [items])

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
                        refreshing={isLoading} onRefresh={refresh}
        >
            <View style={styles.container}>
                <XoView>
                    {items.map((el) => {
                        return <XoBox key={el.id}
                                      onPress={() => {
                                          if (el.value === 'x' || el.value === 'o') return
                                          setPlayers(players === 'one' ? 'two' : 'one')
                                          setItems(items.map((item) => item.id === el.id ? ({
                                              ...item,
                                              value: players === 'one' ? 'x' : 'o',
                                              playerName: players
                                          }) : item))
                                      }}
                        >
                            <Text style={{
                                color: el.playerName === 'one' ? 'red' : 'green',
                                fontSize: 60,
                                fontWeight: '800'
                            }}>{el.value}</Text>
                        </XoBox>

                    })}
                </XoView>

                <StatusBar style="auto"/>
            </View>
        </RefreshControl>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});
