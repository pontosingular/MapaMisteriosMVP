import React from 'react'
import PropTypes from 'prop-types'

import assets from '../../../assets'

import { CustomSvg } from './styles'

export default function Icon ({ color, size, type }) {
  return (
    <CustomSvg src={assets.icons[type]} width={size} color={color} />
  )
}
