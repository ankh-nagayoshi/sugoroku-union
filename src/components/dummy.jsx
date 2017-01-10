import React from 'react';

export default function Dummy() {
  const style = {
    display: 'none',
    zIndex: '-1',
  };
  const images = [
    './dist/img/title.png',
    './dist/img/base.png',
    './dist/img/bg.png',
    './dist/img/copy.png',
    './dist/img/icon01.png',
    './dist/img/icon02.png',
    './dist/img/icon03.png',
    './dist/img/icon04.png',
    './dist/img/icon05.png',
    './dist/img/maintitle.png',
    './dist/img/01.png',
    './dist/img/02.png',
    './dist/img/03.png',
    './dist/img/04.png',
    './dist/img/05.png',
    './dist/img/06.png',
    './dist/img/07.png',
    './dist/img/08.png',
    './dist/img/09.png',
    './dist/img/10.png',
    './dist/img/12.png',
    './dist/img/13.png',
    './dist/img/14.png',
    './dist/img/15.png',
    './dist/img/16.png',
    './dist/img/17.png',
    './dist/img/18.png',
    './dist/img/20.png',
    './dist/img/team01.png',
    './dist/img/team02.png',
    './dist/img/team03.png',
    './dist/img/team04.png',
    './dist/img/team05.png',
  ];
  
  return (
    <div style={style}>
      {
        images.map((image, index) => {
          return <img key={index} style={style.dummy} src={image} alt="dummy" />;
        })
      }
    </div>
  );
}
