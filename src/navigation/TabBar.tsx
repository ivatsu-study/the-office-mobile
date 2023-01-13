import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const TAB_BAR_WIDTH = windowWidth / 5
const ANIMATED_PART_HEIGHT = 5

interface ITabBar {
  state: TabNavigationState<ParamListBase>
  descriptors: BottomTabDescriptorMap
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  insets: EdgeInsets
}

const TabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: ITabBar): JSX.Element => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current

  const animate = React.useCallback(
    (index: number): void => {
      Animated.spring(animationHorizontalValue, {
        toValue: index * TAB_BAR_WIDTH,
        useNativeDriver: true,
      }).start()
    },
    [animationHorizontalValue],
  )

  useEffect(() => {
    animate(state.index)
  }, [animate, state.index])

  return (
    <View
      style={[
        styles.container,
        // Make sure that the safe area is correct
        { paddingBottom: insets.bottom },
      ]}
    >
      <Animated.View style={styles.animatedWrapper}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{ translateX: animationHorizontalValue }],
            },
          ]}
        />
      </Animated.View>

      <View style={styles.routesContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel ?? route.name

          const isFocused = state.index === index

          const onPress = (): void => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = (): void => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return typeof label === 'string' ? (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
              key={`${index}--${route.key}`}
            >
              <View style={styles.innerView}>
                <Text>{label}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#BFC3C6',
  },
  routesContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    backgroundColor: 'grey',
  },
  innerView: {
    paddingVertical: windowHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    width: TAB_BAR_WIDTH,
  },
  iconText: {
    width: TAB_BAR_WIDTH,
    textAlign: 'center',
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: '#e91e63',
  },
  animatedWrapper: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default TabBar
