import 'react-native-gesture-handler'

import React from 'react'
import App from './src/main'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const MainApp = () => (
	<SafeAreaProvider>
		<NavigationContainer>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</NavigationContainer>
	</SafeAreaProvider>
)

export default MainApp
