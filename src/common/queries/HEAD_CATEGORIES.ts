import { gql } from '@apollo/client'

export const GET_HEAD_CATEGORIES = gql`
  query GET_HEAD_CATEGORIES {
    headCategoriesList {
      items {
        name
        id
      }
    }
  }
`