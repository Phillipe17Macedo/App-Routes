import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página HOME</Text>
      <Link href={"/profile"}>Ir para tela Profile</Link>
      <Link href={"/user/123456"}>Ir para tela Usuário</Link>
      <Link href={"/dashboard"}>Ir para o Painel</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
