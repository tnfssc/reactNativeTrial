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

export default codePush({
	checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
	installMode: codePush.InstallMode.ON_NEXT_RESUME,
})(MainApp)
