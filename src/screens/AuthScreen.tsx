import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const TEST = gql`
query MyQuery {
    headCategoriesList {
      items {
        name
        id
      }
    }
  }
  
`

const AuthScreen = () => {
    const { data, loading, error } = useQuery(TEST)
    console.log("🚀 ~ file: AuthScreen.tsx ~ line 19 ~ AuthScreen ~ error", error)
    console.log("🚀 ~ file: AuthScreen.tsx ~ line 19 ~ AuthScreen ~ loading", loading)
    console.log("🚀 ~ file: AuthScreen.tsx ~ line 19 ~ AuthScreen ~ data", data)

    return (
        <View>
            <Text>
                {String(data)}
            </Text>
        </View>
    )
}

export default AuthScreen
