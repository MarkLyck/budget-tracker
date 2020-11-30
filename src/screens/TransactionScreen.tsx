import React from 'react'
import styled from '@emotion/native'
import BudgetOverview from '../components/BudgetOverview'
import CategoryList from '../components/CategoryList'

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

const ChosenCategoryContainer = styled.View`
background: yellow;
padding: 16px 40px;
border-radius: 24px;
position: absolute;
align-self: center;
transform: translateY(-24px);
`

const ChosenCategory = styled.Text`
    font-weight: bold;
    font-size: 16px;
`


const TransactionScreen = () => {
    return (
        <ScreenContainer style={{ borderTopRightRadius: '400px' }} >
            <BudgetOverview />
            <Content>
                <ChosenCategoryContainer>
                    <ChosenCategory>Expense</ChosenCategory>
                </ChosenCategoryContainer>
                <CategoryList />
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
