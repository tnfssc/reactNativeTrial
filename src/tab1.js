import React, { useRef, useCallback } from 'react'

import { TouchableWithoutFeedback } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native-animatable'
import { Button } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import codePush from 'react-native-code-push'

const Stack = createStackNavigator()

const Screen1 = (props) => {
	const text = useRef()
	const theWholeScreenRef = useRef()

	const handleUpdate = () => {
		codePush.sync({
			updateDialog: true,
			installMode: codePush.InstallMode.IMMEDIATE,
		})
	}

	return (
		<View ref={theWholeScreenRef}>
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Screen1 Reimagined 44
				</Text>
			</TouchableWithoutFeedback>
			<Button raised title="Goto Screen2" onPress={() => props.navigation.navigate('Screen2')} />
			<Button title="Update App" onPress={handleUpdate} />
		</View>
	)
}

const Screen2 = (props) => {
	const text = useRef()
	const theWholeScreenRef = useRef()

	useFocusEffect(
		useCallback(() => {
			theWholeScreenRef.current.bounceInRight()
			return () => theWholeScreenRef.current.bounceOutRight()
		}, [])
	)

	return (
		<View ref={theWholeScreenRef}>
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Screen2 Reimagined 22
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
	const theWholeTabRef = useRef()

	useFocusEffect(
		useCallback(() => {
			theWholeTabRef.current.bounceInUp()
			return () => theWholeTabRef.current.bounceOutUp()
		}, [])
	)

	return (
		<View ref={theWholeTabRef} style={{ flex: 1 }}>
			<Stack.Navigator initialRouteName={'Screen1'}>
				<Stack.Screen name="Screen1" component={Screen1} />
				<Stack.Screen name="Screen2" component={Screen2} />
			</Stack.Navigator>
		</View>
	)
}

export default Tab1
