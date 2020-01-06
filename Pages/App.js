import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './Pages/Main';
import Home from './Pages/Home';
const Navigation = createSwitchNavigator(
  {
  MainScreen: Main,
  HomeSCreen: Home
},
{
  initialRouteName: 'MainScreen'
})
export default createAppContainer(Navigation)