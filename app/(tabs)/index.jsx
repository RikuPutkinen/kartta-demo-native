import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

export default function Tab() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}
