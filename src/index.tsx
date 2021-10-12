import * as React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './overide.scss';

export { default as QueryTable } from './modules/QueryTable';
export { default as NormalModal } from './modules/NormalModal';

// export { default as Breadcrumb } from './breadcrumb';
// Delete me
export const Test = () => {
  return (
    <div>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>

      <Button>click</Button>
    </div>
  );
};


