import { Stack } from 'expo-router/stack'
import { store } from '../store'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function AppLayout() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  )
}
