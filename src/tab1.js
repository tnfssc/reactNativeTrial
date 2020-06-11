import React, { useRef, useCallback } from 'react'

import { TouchableWithoutFeedback } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, createAnimatableComponent } from 'react-native-animatable'
import { Button } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'

const Stack = createStackNavigator()

const Screen1 = (props) => {
	const text = useRef()
	const theWholeTabRef = useRef()

	useFocusEffect(
		useCallback(() => {
			theWholeTabRef.current.bounceInUp()
		}, [])
	)

	return (
		<View animation="fadeIn" ref={theWholeTabRef}>
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Screen1
				</Text>
			</TouchableWithoutFeedback>
			<Button raised title="Goto Screen2" onPress={() => props.navigation.navigate('Screen2')} />
		</View>
	)
}

const Screen2 = (props) => {
	const text = useRef()
	const theWholeTabRef = useRef()

	useFocusEffect(
		useCallback(() => {
			theWholeTabRef.current.bounceInRight()
		}, [])
	)

	return (
		<View animation="fadeIn" ref={theWholeTabRef}>
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Screen2
				</Text>
			</TouchableWithoutFeedback>
			<Button
				raised
				title="Goto Tab2"
				onPress={() => props.navigation.navigate('Tab2', { awesome: 'goof', cool: 'shop' })}
			/>
		</View>
	)
}

const Tab1 = (props) => {
	return (
		<Stack.Navigator initialRouteName={'Screen1'}>
			<Stack.Screen name="Screen1" component={Screen1} />
			<Stack.Screen name="Screen2" component={Screen2} />
		</Stack.Navigator>
	)
}

export default Tab1
