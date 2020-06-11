import React, { useRef, useCallback } from 'react'

import { TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-elements'
import { View, Text } from 'react-native-animatable'
import { useFocusEffect } from '@react-navigation/native'

const Tab2 = (props) => {
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
					Tab 2
				</Text>
			</TouchableWithoutFeedback>
			<Text>{JSON.stringify(props.route.params)}</Text>
			<Button
				raised
				title="Goto screen1"
				onPress={() => props.navigation.navigate('Tab1', { screen: 'Screen1' })}
			/>
			<Button raised title="Goto screen2" onPress={() => props.navigation.navigate('Screen2')} />
		</View>
	)
}

export default Tab2
