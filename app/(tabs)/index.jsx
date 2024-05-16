import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
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
  const [showTitle, setShowTitle] = useState(false)
  let locations = []

  if (error) {
    console.log(error)
  }

  if (data) {
    locations = data
  }

  function handleRegionChangeComplete(e) {
    console.log(e)
    const zoomLevel = Math.log2(360 / e.longitudeDelta)
    console.log(zoomLevel)
    setShowTitle(zoomLevel > 12)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {locations.map(l => (
          <MapMarker locationObj={l} showTitle={showTitle} key={l.id} />
        ))}
      </MapView>
    </View>
  )
}
