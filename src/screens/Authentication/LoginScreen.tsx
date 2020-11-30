import React from 'react'
import styled from '@emotion/native'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../../common/queries'
import { ActionButton } from '../../ui-components'

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
    const [userLogin] = useMutation(USER_LOGIN)

    const handleLogin = async () => {
        const email = "mark.lyck@gmail.com"
        const password = "Sommer4tidg"

        try {
            const response = await userLogin({
                variables: {
                    email,
                    password
                },
            })

            console.log(response)
        } catch (error) {
            console.log('login error', error)
            let errorMessage = error.message
            console.log('errorMessage', errorMessage)

            if (error.errors && error.errors.length && error.errors[0] && error.errors[0].message) {
                console.log('errorMessage 2', error.errors[0].message)
            } else if (error.graphQLErrors && error.graphQLErrors.length) {
                const graphQLError = error.graphQLErrors[0]
                console.log('graphQLError', graphQLError)
            }
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <ActionButton onPress={handleLogin} type="primary">Login</ActionButton>
        </Container>
    )
}

export default Login
