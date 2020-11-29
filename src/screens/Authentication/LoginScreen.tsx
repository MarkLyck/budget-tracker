import React from 'react'
import styled from '@emotion/native'

const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
    height: 100%;
`

const Title = styled.Text``

const Login = () => {

    return (
        <Container>
            <Title>Login</Title>
        </Container>
    )
}

export default Login
