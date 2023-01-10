import { View, Image } from 'react-native'

import OfficeMainImage from '../../../../assets/office.png'
import styles from './heroImageStyles'

const HeroImage: React.FunctionComponent = () => (
  <View style={styles.imageContainer}>
    <Image style={styles.image} source={OfficeMainImage} />
  </View>
)

export default HeroImage
