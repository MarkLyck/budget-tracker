import React from 'react'
import iconMap from '../../common/iconMap'

export const CategoryIcon = ({ icon = "coffee" }) => {
    const Icon = iconMap[icon] ? iconMap[icon] : iconMap.cash

    return (
        <Icon />
    )
}

export default CategoryIcon