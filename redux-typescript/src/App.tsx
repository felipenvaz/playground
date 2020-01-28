import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Counter} from './components/Counter';
import {Counter2} from './components/Counter2';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Counter2 />
    </Provider>
  );
};

export default App;
