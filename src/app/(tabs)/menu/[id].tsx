import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Details' + id}} />
      <Text>Prdouct Details id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})