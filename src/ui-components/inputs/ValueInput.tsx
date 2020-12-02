import React from 'react'
import { View, TextInput } from 'react-native';
import styled from '@emotion/native'

const StyledTextInput = styled(TextInput)`
    height: 40px;
    color: white;
    align-self: center;
    font-weight: bold;
    font-size: 40px;
`


interface ValueInputType {
    value: string;
    onChange: (value: string) => void;
}

export const ValueInput = ({ value = "", onChange = () => { } }: ValueInputType) => {
    return (
        <View>
            <StyledTextInput
                onChangeText={onChange}
                value={value}
            />
        </View>
    )
}
