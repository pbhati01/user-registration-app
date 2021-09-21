import React from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <header className={classes.headerContainer}>
      <div className={classes.logo}></div>
    </header>
  );
};

export default Header;