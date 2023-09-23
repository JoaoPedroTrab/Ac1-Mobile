import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles }  from './Styles';

function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Login</Text>
      <Button
        title="Voltar para a Página Inicial"
        onPress={() => navigation.navigate('Home')}
        style={styles.botao}
      />
    </View>
  );
}

export default Login;
