import React from 'react'
import styled from '@emotion/native'
import backgroundImage from '../../assets/budget/background.jpg'

const BudgetContainer = styled.ImageBackground`
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    padding-top: 32px;
`

const Title = styled.Text`
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
`
const Sum = styled.Text`
    color: white;
    font-size: 40px;
    font-weight: 900;
`
const RemainingBudget = styled.Text`
    color: white;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
`

const BudgetOverview = () => {
    return (
        <BudgetContainer source={backgroundImage} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
            <Title>Budget</Title>
            <Sum>$420</Sum>
            <RemainingBudget>Remaining Budget</RemainingBudget>
        </BudgetContainer>
    )
}

export default BudgetOverview
