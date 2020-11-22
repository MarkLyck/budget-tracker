import { Button } from '@ant-design/react-native';
import styled from '@emotion/native'

export const ActionButton = styled(Button)`
    border-radius: 50px;
    background-color: ${(p: any) => p.theme.colors.primary.main};
    border: none;
`

