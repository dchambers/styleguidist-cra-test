import React from 'react';
import './component-styles.css';

const MyComponent = ({children}) => (
  <button className="my-component">{children}</button>
);
export default MyComponent;
