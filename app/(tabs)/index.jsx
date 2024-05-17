import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import MapView from 'react-native-maps'

import { useGetAllLocationsQuery } from '../../services/locations'
import MapMarker from '../../components/mapMarker'
import LocationBottonSheet from '../../components/locationBottomSheet'

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
  const [selectedLocation, setSelectedLocation] = useState(null)

  let locations = []

  if (error) {
    console.log(error)
  }

  if (data) {
    locations = data
  }

  console.log('SELECTED LOCATION', selectedLocation)

  function handleMarkerDeselect() {
    setSelectedLocation(null)
    console.log('MARKER DESELECT')
  }

  function handleMarkerSelect(l) {
    setSelectedLocation(l)
    console.log('MARKER SELECT', l)
  }

  function handleBottomSheetClose() {
    console.log('BOTTOM SHEET CLOSED')
    setSelectedLocation(null)
  }

  function handleRegionChangeComplete(e) {
    const zoomLevel = Math.log2(360 / e.longitudeDelta)
    console.log('ZOOM LEVEL:', zoomLevel)
    setShowTitle(zoomLevel > 12)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {locations.map(l => (
          <MapMarker
            locationObj={l}
            showTitle={showTitle}
            key={l.id}
            onSelect={() => handleMarkerSelect(l)}
            onDeselect={() => handleMarkerDeselect()}
          />
        ))}
      </MapView>
      {selectedLocation && (
        <LocationBottonSheet
          locationObj={selectedLocation}
          onClose={handleBottomSheetClose}
        />
      )}
    </View>
  )
}
