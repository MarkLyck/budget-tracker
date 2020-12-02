import React, { useState } from 'react'
import styled from '@emotion/native'
import BudgetOverview from '../components/BudgetOverview'
import CategoryList from '../components/CategoryList'
import { CategorySelect, ValueInput } from '../ui-components'

const ScreenContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    height: 100%;
`

const Content = styled.View`
transform: translateY(-20px);
background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
border-top-right-radius: 20px;
border-top-left-radius: 20px;
width: 100%;
height: 100%;

`

const StyledCategorySelect = styled(CategorySelect)`
    transform: translateY(-24px);
`

const TransactionScreen = () => {
    const [category, setCategory] = useState(undefined)

    return (
        <ScreenContainer>
            <BudgetOverview />
            <Content>
                <StyledCategorySelect category={category} />
                <ValueInput value="123" onChange={console.log} />
                <CategoryList onChange={setCategory} />
            </Content>
            {/* Optional: Choose type */}

            {/* Choose category */}

            {/* Set Value */}
            {/* Optional: Write note */}
            {/* Optional: choose date */}
            {/* LOG button */}
        </ScreenContainer>
    )
}

export default TransactionScreen
