import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import ButtonVue from './components/ButtonVue'
import "./index.css";

const App=() => {
  const [count, setCount] = useState(0)
  return (
        <div>
          <ButtonVue nameBtn={'(Vue -> React)'} count={count} action={() => setCount(count + 1)}/>
        </div>
  );
};

// export default App
export default hot(App)