import React from 'react'
import renderer from 'react-test-renderer'
import HeroImage from './HeroImage'

describe('<HeroImage />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<HeroImage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
