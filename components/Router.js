import { StackNavigator } from "react-navigation";
import Props from './Props'
import State from './State'

export const Stack = StackNavigator({
  Props:{
    screen: Props
  },
  State:{
    screen: State
  }
})