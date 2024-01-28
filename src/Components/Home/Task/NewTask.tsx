import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NewTask = () => {
  return (
    <View>
        <TouchableOpacity>
          <View style={styles.container}>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'red'
    },
    button: {
      borderRadius:50
    },
  });
export default NewTask