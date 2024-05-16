import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { useGetAllLocationsQuery } from '../../services/locations'

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
  const { data, error, isLoading } = useGetAllLocationsQuery()

  if (error) {
    console.log(error)
  }

  if (data) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
    </View>
  )
}
