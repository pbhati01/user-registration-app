import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './Loader.styles';

const useStyles = createUseStyles(styles);

const Loader = ({ className: classNames, ...otherProps }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.loaderContainer, classNames)}>
      <div className={classnames('lds-spinner')}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
