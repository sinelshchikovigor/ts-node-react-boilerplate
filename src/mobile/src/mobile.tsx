import {StackNavigator} from 'react-navigation';
import {Home, Login} from './views';

export const Mobile = StackNavigator({
    home: {
        screen: Login,
    },
    login: {
        screen: Home,
    },
}, {
    initialRouteName: 'home',
});
