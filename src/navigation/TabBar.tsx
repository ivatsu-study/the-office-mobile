import type {
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
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'
import { Assign } from 'utility-types'

import { tabScreens } from './screens'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const TAB_NUMBER = Object.keys(tabScreens).length
const TAB_BAR_WIDTH = windowWidth / TAB_NUMBER
const ANIMATED_PART_HEIGHT = TAB_NUMBER

interface ITabBar {
  state: TabNavigationState<ParamListBase>
  descriptors: BottomTabDescriptorMap
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  insets: EdgeInsets
}

interface IRoute {
  route: TabNavigationState<ParamListBase>['routes'][0]
}

type OnTabPress = Assign<IRoute, { isFocused: boolean }>

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

  const onTabPress = React.useCallback(
    ({ route, isFocused }: OnTabPress): void => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name)
      }
    },
    [navigation],
  )

  const onTabLongPress = React.useCallback(
    ({ route }: IRoute) => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      })
    },
    [navigation],
  )

  return (
    <View
      style={[
        styles.container,
        // apply the bottom safe area insets
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

          return typeof label === 'string' ? (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onTabPress({ route, isFocused })}
              onLongPress={() => onTabLongPress({ route })}
              style={styles.tabButton}
              key={`${index}--${route.key}`}
            >
              <View style={styles.innerView}>
                <Text style={isFocused && styles.tabBarItemFocused}>
                  {label}
                </Text>
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
    backgroundColor: '#033E5E',
  },
  animatedWrapper: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarItemFocused: {
    fontWeight: '700',
    color: '#033E5E',
  },
})

export default TabBar
