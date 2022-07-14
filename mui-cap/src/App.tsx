import React from 'react';
import { Divider } from '@mui/material';
import { Example1 } from './components/Example1';
import { Example2 } from './components/Example2';

function App() {
  return (
    <>
      <Example1 />

      <Divider />

      <Example2 />
    </>
  );
}

export default App;
