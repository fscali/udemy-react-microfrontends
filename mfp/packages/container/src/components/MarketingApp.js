import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('the container noticed navigation in Marketing');
      },
    });
  }, []);

  return <div ref={ref}></div>;
};
