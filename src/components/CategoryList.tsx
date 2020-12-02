import React from 'react'
import { Grid } from '@ant-design/react-native';
import styled from '@emotion/native'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../common/queries'
import { LoadingIndicator, Category } from '../ui-components'

const Container = styled.View`
    padding: 24px;
    margin-top: 24px;
`

const CategoryItem = styled(Category)`
    margin: 0px;
`

interface CategoryListType {
    onChange: (category: any) => void
}

const CategoryList = ({ onChange }: CategoryListType) => {
    const { data, loading } = useQuery(GET_CATEGORIES)

    if (loading) return <LoadingIndicator />

    const handleCategory = (category: any) => {
        console.log('PRESS!', category)
        onChange(category)
    }

    return (
        <Container>
            <Grid
                data={data.categoriesList.items}
                hasLine={false}
                columnNum={3}
                renderItem={(category) => <CategoryItem category={category} onPress={() => handleCategory(category)} />}
                itemStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
        </Container>
    )
}

export default CategoryList
