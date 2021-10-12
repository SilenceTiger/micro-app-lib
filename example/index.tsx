import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryTable } from '../src';

const App = () => {
  return (
    <div>
      <QueryTable />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
