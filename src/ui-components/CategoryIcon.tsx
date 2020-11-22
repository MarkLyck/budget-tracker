import React from 'react'
import { Image } from 'react-native'
import styled from '@emotion/native'

import { cash } from '../../assets/icons'

const Icon = styled.Image`
    width: 30px;
    height: 30px;
`

export const CategoryIcon = () => (
    <Icon source={cash} />
)
