import { Stack } from 'expo-router/stack'
import { store } from '../store'
import { Provider } from 'react-redux'

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  )
}
