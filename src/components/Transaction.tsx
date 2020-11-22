import React from 'react'
import { format, isToday, isYesterday } from 'date-fns'
import { Flex } from '@ant-design/react-native';
import styled from '@emotion/native'
import { CategoryIcon } from '../ui-components'

const Container = styled.View`
    background-color: ${(p: any) => p.theme.colors.secondary.backgroundColor};
    width: 100%;
    margin-bottom: 8px;
    padding: 16px;
    border-radius: 8px;
`

const Value = styled.Text`
    color: ${(p: any) => p.theme.colors.primary.textColor};
    font-weight: bold;
`

const Note = styled.Text`
    color: ${(p: any) => p.theme.colors.secondary.textColor};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
`

const Date = styled.Text`
    color: ${(p: any) => p.theme.colors.secondary.textColor};
    font-weight: 400;
    font-size: 10px;
    text-transform: uppercase;
`

const Description = styled.View`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Transaction = ({ transaction }: any) => {

    // format date
    let dateString = format(transaction.date, 'MMM dd, yyyy')
    if (isToday(transaction.date)) {
        dateString = 'Today'
    } else if (isYesterday(transaction.date)) {
        dateString = 'Yesterday'
    }

    return (
        <Container key={transaction.id}>
            <Flex justify="between" style={{ width: '100%' }}>
                <Flex align="center" >
                    <CategoryIcon />
                    <Description>
                        <Note>{transaction.note ? transaction.note : transaction.category}</Note>
                        <Date>{dateString}</Date>
                    </Description>
                </Flex>
                <Value>${transaction.value}</Value>
            </Flex>
        </Container>
    )
}


export default Transaction
