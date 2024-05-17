import { Marker } from 'react-native-maps'
import { Text, StyleSheet, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  image: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  text: {
    textAlign: 'center',
    color: 'blue',
  },
})

export default function MapMarker({
  locationObj,
  showTitle,
  onSelect,
  onDeselect,
}) {
  const { name, location } = locationObj

  const latLng = {
    latitude: location.coordinates[1],
    longitude: location.coordinates[0],
  }

  return (
    <Marker coordinate={latLng} onSelect={onSelect} onDeselect={onDeselect}>
      <View style={styles.container}>
        <Image
          source={require('../assets/marker-251.png')}
          style={styles.image}
        />
        {showTitle && <Text style={styles.text}>{name}</Text>}
      </View>
    </Marker>
  )
}
