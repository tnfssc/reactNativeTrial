import React, { useRef } from 'react'

import { TouchableWithoutFeedback } from 'react-native'
import { View, Text } from 'react-native-animatable'
import { Button } from 'react-native-elements'

const Tab1 = (props) => {
	const text = useRef()

	return (
		<View animation="fadeIn">
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Tab 1
				</Text>
			</TouchableWithoutFeedback>
			<Button raised title="Goto screen2" onPress={() => props.navigation.navigate('Tab2')} />
		</View>
	)
}

export default Tab1
