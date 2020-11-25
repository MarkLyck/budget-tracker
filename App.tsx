import Storybook from './storybook'
import AppProvider from './src/lib/AppProvider'

const STORYBOOK = false

export default STORYBOOK ? Storybook : AppProvider
