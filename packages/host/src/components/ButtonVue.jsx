import { mount } from 'remote_vue/ButtonVue';
import { hot } from 'react-hot-loader/root';
import React, { useRef, useEffect, useState } from 'react';

// you should be able to do the same kind of pattern in other frameworks like Angular or Vue.
export default ({nameBtn2}) => {
  // const [nameB, setNameB] = useState(props.nameBt ? props.nameBt : '')
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    ref.current.__vue_app__._instance.props.nameBtn = nameBtn2
    console.log('BUTTONVUE REACT')
  }, []);

  return <div ref={ref} />;
};

