import React from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Footer.styles';

const useStyles = createUseStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  return (
    <footer className={classnames(classes.footerContainer)}> 
    </footer>
  );
};

export default Footer;