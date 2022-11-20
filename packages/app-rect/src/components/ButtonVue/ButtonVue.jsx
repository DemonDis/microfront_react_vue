import { mount } from 'app_vue/ButtonVue';
import { hot } from 'react-hot-loader/root';
import React, { useRef, useEffect } from 'react';

 const btnVue = ({nameBtn, action, count}) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    console.log('BUTTON VUE in REACT mount', ref.current)
  }, []);

  useEffect(() => {
    ref.current._vnode.component.props.action = action
    ref.current._vnode.component.props.count = count
    ref.current._vnode.component.props.nameBtn = nameBtn
    console.log('BUTTON VUE in REACT click', ref.current)
  }, [action]);

  return <div ref={ref} />;
};

export default hot(btnVue)