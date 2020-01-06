import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './Pages/Main'; 
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Category from './Pages/Category';
import Order from './Component/Order';

const Navigation = createSwitchNavigator(
  {
    MainScreen: Main,
    HomeScreen: Home,
    CategoryScreen: Category,
    DetailScreen: Detail,
    OrderScreen: Order,
  },
  {
    initialRouteName: 'MainScreen'
  })
  
export default createAppContainer(Navigation)
