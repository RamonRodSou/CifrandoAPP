import React from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'
import Task from './Task/Task'


const Home = () => {
  return (
    <View style={styles.container}>
        <Task/>
        <TouchableOpacity>
          <View style={styles.button}>
              <Button title="Add Nova Cifra" onPress={()=>{alert("Working")}}/>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#060c13',
    },
    button: {
      borderRadius:50
    },
  });
  

export default Home