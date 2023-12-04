import React from 'react';
import { createDrawerNavigatior } from '@react-navigation/drawer';
import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigatior();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
                <Drawer.Screen
                    name = 'Home'
                    component = {TabNavigator}
                />
                <Drawer.Screen
                    name = 'Profile'
                    component = {Profile}
                />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;