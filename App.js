import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/header';
import ModalBoite from './components/modal';
import styles from './components/style';
export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />
          <ModalBoite />
          <View>
            <Text style={styles.produitLabel}>Liste de produits</Text>
          </View>
        </View>
    );
  }
}
