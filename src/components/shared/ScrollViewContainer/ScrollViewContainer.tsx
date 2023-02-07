import { ScrollView } from 'react-native'

import styles from './scrollViewContainer.styles'

interface IScrollViewContainerPropTypes {
  children: React.ReactNode
}

const ScrollViewContainer: React.FunctionComponent<
  IScrollViewContainerPropTypes
> = ({ children }: IScrollViewContainerPropTypes) => (
  <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
)

export default ScrollViewContainer
