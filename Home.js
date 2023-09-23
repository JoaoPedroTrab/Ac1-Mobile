import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles }  from './Styles';

function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Bem vindo! </Text>
            <View style={styles.botaoContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.botao}
                />
            </View>
            <View style={styles.botaocontainer}>
                <Button
                    title="Cadastro"
                    onPress={() => navigation.navigate('Cadastro')}
                    style={styles.botao}
                />
            </View>
        </View>
  );
}

export default Home;













