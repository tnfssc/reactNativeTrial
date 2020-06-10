import 'react-native-gesture-handler'

import React from 'react'
import Main from './src/main'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'

const App = () => (
	<NavigationContainer>
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	</NavigationContainer>
)

export default App
