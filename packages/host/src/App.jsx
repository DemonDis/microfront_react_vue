import React, { useState, lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';

import "./index.css";

const VueBtnComponent = lazy(() => import('./components/ButtonVue'));

const App=() => {
  const [count, setCount] = useState(0)
  return (
        <div>
          <Suspense fallback={<div>LOAD...</div>}>
            <VueBtnComponent 
              nameBtn={'VUE BTN'}
              count={count} action={() => setCount(count + 1)}
            />
          </Suspense>
        </div>
  );
};

// export default App
export default hot(App)