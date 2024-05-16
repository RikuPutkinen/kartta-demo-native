import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

import { useGetAllLocationsQuery } from '../../services/locations'
import MapMarker from '../../components/mapMarker'

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
  let locations = []

  if (error) {
    console.log(error)
  }

  if (data) {
    locations = data
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {locations.map(l => (
          <MapMarker locationObj={l} key={l.id} />
        ))}
      </MapView>
    </View>
  )
}
