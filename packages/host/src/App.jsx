import React from 'react';
import { hot } from 'react-hot-loader/root';
import ButtonVue from './components/ButtonVue'
import "./index.css";

const App=() => {

  return (
        <div>
          <ButtonVue nameBtn2={'CCCCC ssss'}/>
        </div>
  );
};

// export default App
export default hot(App)