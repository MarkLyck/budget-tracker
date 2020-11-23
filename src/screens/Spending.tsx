import React from 'react'
import styled from '@emotion/native'
import { FlatList } from 'react-native'
import { WhiteSpace } from '@ant-design/react-native';
import { ActionButton } from '../ui-components'
import Transaction from '../components/Transaction'

const SpendingView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
    height: 100%;
`

const DollarSign = styled.Text`
    font-size: 24px;
    font-weight: 900;
`

const TotalExpenses = styled.Text`
    font-size: 40px;
    color: white;
    font-weight: 700;
`

const TotalExpensesLabel = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: white;
`

const BudgetText = styled.Text`
    color: ${(p: any) => p.theme.colors.primary.main};
    font-weight: bold;
    font-size: 24px;
`

const BudgetTotal = styled.Text`
    color: ${(p: any) => p.theme.colors.secondary.textColor};
    font-weight: bold;
    font-size: 24px;
`

const ActionButtonText = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
`

const ListHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
    width: 100%;
`

const StyledFlatList = styled(FlatList)`
    width: 100%;
    margin-top: 8px;
    padding: 0 24px;
`

const mockTransactions = [
    { id: '1', note: '', value: 10, category: 'misc', date: new Date() },
    { id: '2', note: 'Whole foods', value: 10.99, category: 'groceries', date: new Date() },
    { id: '3', note: '', value: 10.99, category: 'groceries', date: new Date() },
    { id: '4', note: '', value: 10.99, category: 'coffee', date: new Date() },
    { id: '5', note: 'starbucks', value: 10.99, category: 'coffee', date: new Date() },
    { id: '6', note: '', value: 10.99, category: 'misc', date: new Date() },
    { id: '7', note: '', value: 19.99, category: 'misc', date: new Date() },
    { id: '8', note: '', value: 10.99, category: 'shopping', date: new Date() },
    { id: '9', note: '', value: 10.99, category: 'transport', date: new Date() },
    { id: '11', note: '', value: 10.99, category: 'misc', date: new Date() },
    { id: '21', note: '', value: 410.00, category: 'misc', date: new Date() },
    { id: '31', note: 'Dunkin', value: 10.99, category: 'coffee', date: new Date() },
    { id: '41', note: '', value: 1500, category: 'housing', date: new Date() },
    { id: '51', note: '', value: 10.99, category: 'misc', date: new Date() },
    { id: '61', note: 'subway', value: 10.99, category: 'transport', date: new Date() },
    { id: '71', note: '', value: 10.99, category: 'shopping', date: new Date() },
    { id: '81', note: '', value: 10.99, category: 'misc', date: new Date() },
    { id: '91', note: '', value: 10.99, category: 'transport', date: new Date() },
]


const Spending = () => {
    const totalExpenses = 424.00

    return (
        <SpendingView>
            <TotalExpenses><DollarSign>$</DollarSign>{totalExpenses}</TotalExpenses>
            <TotalExpensesLabel>TOTAL EXPENSES</TotalExpensesLabel>
            <WhiteSpace size="lg" />
            <ActionButton type="primary"><ActionButtonText>Spent in the last 7 days</ActionButtonText></ActionButton>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <ListHeader>
                <BudgetText>Budget</BudgetText>
                <BudgetTotal>${totalExpenses}</BudgetTotal>
            </ListHeader>
            <StyledFlatList data={mockTransactions}
                renderItem={({ item }) => <Transaction transaction={item} />}
            />
        </SpendingView>
    )
}

export default Spending
