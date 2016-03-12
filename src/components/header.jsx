import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';

import style from './style';

import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const MainMenu = () => (
  <IconMenu icon='more_vert' position='top-left' menuRipple>
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuItem value='help' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
);

const MainAppBar = () => (
  <AppBar className={style.appbar} flat>
    <h1 className={style.title}>My  App</h1>
    <Button className={style.button} icon="add" floating accent/>
    <MainMenu />
  </AppBar>
);

export default MainAppBar;
