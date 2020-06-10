import React, { useRef } from 'react'

import { TouchableWithoutFeedback } from 'react-native'
import { View, Text } from 'react-native-animatable'

const Tab2 = () => {
	const text = useRef()

	return (
		<View animation="fadeIn">
			<TouchableWithoutFeedback onPress={() => text.current.shake()}>
				<Text ref={text} style={{ fontSize: 25 }}>
					Tab 2
				</Text>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default Tab2
