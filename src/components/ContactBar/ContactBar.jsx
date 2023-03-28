import React, { useLayoutEffect, useState } from 'react';

function ContactBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();
    console.log('updated');
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [screenWidth, setScreenWidth]);

  if (screenWidth < 650) {
    return (
      <div className='contact-bar'>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
          </svg>
          <p className='contact-bar__phone'>0 766 755 744</p>
        </div>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
          </svg>
          <p className='contact-bar__phone'>Rennes Métropole</p>
        </div>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
          >
            <path d='M368.6 96l76.8 96H288V96h80.6zM224 80V192H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32H65.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32V224c0-17.7-14.3-32-32-32H527.4L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z' />
          </svg>
          <p className='contact-bar__phone'>24h/24 7j/7</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='contact-bar'>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
          </svg>
          <p className='contact-bar__phone'>07 66 75 57 44</p>
        </div>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
          </svg>
          <p className='contact-bar__phone'>Rennes Métropole</p>
        </div>
        <div className='contact-bar__container'>
          <svg
            className='contact-bar__svgPhone'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'></path>
          </svg>
          <p className='contact-bar__phone'>pascal.choquetpaul@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default ContactBar;
