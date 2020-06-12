import 'react-native-gesture-handler'
import React from 'react'
import App from './src/main'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'
import codePush from 'react-native-code-push'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const MainApp = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default codePush(MainApp)
