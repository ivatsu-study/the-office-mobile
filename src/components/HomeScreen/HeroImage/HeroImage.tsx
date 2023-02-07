import { Image, View } from 'react-native'

import OfficeMainImage from '../../../../assets/office.png'
import styles from './heroImage.styles'

const HeroImage: React.FunctionComponent = () => (
  <View style={styles.imageContainer}>
    <Image style={styles.image} source={OfficeMainImage} />
  </View>
)

export default HeroImage
