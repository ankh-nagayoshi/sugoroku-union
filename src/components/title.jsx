import React from 'react';
import classNames from 'classnames';

export default function Title({ bounceIn, slideOut }) {
  const styles = {
    global: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: '9100',
    },
    title: {
      position: 'absolute',
      top: '160px',
      left: '0',
      right: '0',
      margin: 'auto',
      zIndex: '9102',
    },
    subTitle: {
      position: 'absolute',
      top: '50px',
      left: '0',
      right: '0',
      margin: 'auto',
      zIndex: '9103',
    },
    copy: {
      position: 'absolute',
      top: '470px',
      left: '0',
      right: '0',
      margin: 'auto',
      zIndex: '9101',
    },
  };
  
  const className = classNames({
    animated: true,
    bounceInDown: bounceIn,
    fadeOutDown: slideOut,
  });
  
  return (
    <div className={className} style={styles.global}>
      <img style={styles.title} src="./dist/img/maintitle.png" alt="Title" />
      <img style={styles.subTitle} src="./dist/img/title.png" alt="SubTitle" />
      <img style={styles.copy} src="./dist/img/copy.png" alt="Copy" />
    </div>
  );
}

Title.propTypes = {
  bounceIn: React.PropTypes.bool,
  slideOut: React.PropTypes.bool,
};
