import { mount } from 'remote_vue/ButtonVue';
import { hot } from 'react-hot-loader/root';
import React, { useRef, useEffect } from 'react';

 const btnVue = ({nameBtn, action, count}) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    ref.current.__vue_app__._instance.props.nameBtn = nameBtn
    console.log('BUTTONVUE REACT')
  }, []);

  useEffect(() => {
    ref.current.__vue_app__._instance.props.action = action
    ref.current.__vue_app__._instance.props.count = count
  }, [action]);

  return <div ref={ref} />;
};

export default hot(btnVue)