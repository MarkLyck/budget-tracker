import React from 'react'
import styled from '@emotion/native'
import { useMutation } from '@apollo/client'
import { USER_SIGNUP, USER_LOGIN } from '../../common/queries'
import { ActionButton } from '../../ui-components'

const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
    height: 100%;
`

const Title = styled.Text`
    color: white;
`

const SignUpScreen = () => {
    const [userSignup] = useMutation(USER_SIGNUP)
    const [userLogin] = useMutation(USER_LOGIN)

    const handleSignUp = async () => {
        console.log(window.location)
        const email = "hello@marklyck.com"
        const password = "Sommer4tidb"

        try {
            await userSignup({
                variables: {
                    email,
                    password
                },
            })

            const loginData = await userLogin({ variables: { email, password } })
            console.log("🚀 ~ file: SignUpScreen.tsx ~ line 38 ~ handleSignUp ~ loginData", loginData)

            // save authToken
            const authToken = loginData.data.userLogin.auth.idToken
            console.log("🚀 ~ file: SignUpScreen.tsx ~ line 41 ~ handleSignUp ~ authToken", authToken)

            // store authToken
            // if (hasStorage) localStorage.authToken = authToken
            // @ts-ignore
            // if (isBrowser) window.authToken = authToken
        } catch (error) {
            console.log('signup error', error)
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
            <Title>Sign Up</Title>
            <ActionButton onPress={handleSignUp} type="primary">Sign up</ActionButton>
        </Container>
    )
}

export default SignUpScreen
