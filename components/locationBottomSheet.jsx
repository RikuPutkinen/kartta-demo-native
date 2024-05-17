import { View, Text, StyleSheet, Image } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  horizontal: {
    flexDirection: 'row',
    gap: 8,
  },
  grayed: {
    color: '#555',
  },
})

export default function LocationBottonSheet({ locationObj, onClose }) {
  const bottomSheetRef = useRef(null)
  const { id, name, description, imageUrl, location, rating, reviewCount } =
    locationObj

  console.log('BOTTOM SHEET OPENED')

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['25%', '50%', '90%']}
      enablePanDownToClose={true}
      onClose={onClose}
    >
      <BottomSheetView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            src={imageUrl}
            onError={err => console.log(err)}
          />
        </View>
        <Text style={styles.title}>{name}</Text>
        <Text>{description}</Text>
        <Text style={styles.subHeading}>Reviews</Text>
        {reviewCount === 0 ? (
          <Text>No reviews</Text>
        ) : (
          <View style={styles.horizontal}>
            <Text>{rating.toFixed(1)}/5</Text>
            <Text style={styles.grayed}>({reviewCount} reviews)</Text>
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  )
}
