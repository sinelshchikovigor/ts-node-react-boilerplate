import {StackNavigator} from 'react-navigation';
import {Home, Login} from '..';

export const Navigator = StackNavigator({
    home: {
        screen: Login,
    },
    login: {
        screen: Home,
    },
}, {
    initialRouteName: 'home',
});
