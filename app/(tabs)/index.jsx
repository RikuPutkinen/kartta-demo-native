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
        {locations.map(l => {
          const { id, name, description, location } = l
          console.log(l)

          const latLng = {
            latitude: location.coordinates[1],
            longitude: location.coordinates[0],
          }

          return (
            <Marker
              key={id}
              title={name}
              description={description}
              coordinate={latLng}
            />
          )
        })}
      </MapView>
    </View>
  )
}
