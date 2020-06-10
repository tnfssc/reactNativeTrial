import React, { useRef, useEffect, createRef } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Tab1 from './tab1'
import Tab2 from './tab2'

import { createAnimatableComponent, View, Text } from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const allTabs = [
	{
		component: Tab1,
		name: 'Tab1',
		title: 'First Tab',
		icon: (props) => <Icon {...props} name="home" />,
	},
	{
		component: Tab2,
		name: 'Tab2',
		title: 'Second Tab',
		icon: (props) => <Icon {...props} name="menu" />,
	},
]

const MyTabBar = ({ state, descriptors, navigation }) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options
	if (focusedOptions.tabBarVisible === false) return null

	const tabIconRefs = useRef([])

	return (
		<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name
				const isFocused = state.index === index
				const iconColor = isFocused ? '#1E88E5' : 'grey'
				const currentTab = allTabs.find((tab) => tab.name === route.name)
				if (tabIconRefs.current.length !== state.routes.length)
					tabIconRefs.current = Array(state.routes.length)
						.fill()
						.map((_, i) => tabIconRefs.current[i] || createRef())
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
						tabIconRefs.current[index].rubberBand()
					}
				}
				const onLongPress = () => navigation.emit({ type: 'tabLongPress', target: route.key })
				return (
					<TouchableWithoutFeedback key={`item-${index}`} onPress={onPress} onLongPress={onLongPress}>
						<View
							style={{
								width: `${100 / state.routes.length}%`,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<View
								ref={(e) => (tabIconRefs.current[index] = e)}
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<currentTab.icon color={iconColor} />
								<Text style={{ color: iconColor }}>{label}</Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				)
			})}
		</View>
	)
}

const App = () => {
	const iconRef = useRef()

	useEffect(() => {
		console.log('render')
	})

	return (
		<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
			{allTabs.map((tab, index) => (
				<Tab.Screen {...tab} key={`item-${index}`} />
			))}
		</Tab.Navigator>
	)
}

export default App
