import React, { Component } from 'react';
import { Switch, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function DarkMode () {
  const [mode, setMode] = useState(false);


    return (
        <>
      <View style={styles.container}>
        <Switch value = {mode} onValueChange = {setMode((value) => !value)}/>
      </View>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});