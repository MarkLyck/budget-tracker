import React from 'react'
import styled from '@emotion/native'
import BudgetOverview from '../components/BudgetOverview'

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
// 
const TypeContainer = styled.View`

`

const TypePicker = styled.Text`

`


const TransactionScreen = () => {
    return (
        <ScreenContainer style={{ borderTopRightRadius: '400px' }} >
            <BudgetOverview />
            <Content>
                <TypeContainer>
                    <TypePicker>Expense</TypePicker>
                </TypeContainer>
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
