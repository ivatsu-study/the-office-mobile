import React from 'react'
import { Animated, Easing } from 'react-native'
import LoadingPrisonMike from '../../../components/shared/LoadingPrisonMike/LoadingPrisonMike'

const LoadingPrisonMikeContainer: React.FunctionComponent = () => {
  const spinValue = React.useRef(new Animated.Value(0)).current
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.delay(2000)
      ])
    ).start()
  }, [])

  return (
    <LoadingPrisonMike spin={spin} />
  )
}

export default LoadingPrisonMikeContainer
