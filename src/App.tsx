import * as React from 'react';
import './style.css';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  let isAlert = false;
  const handleClick = () => {
    isAlert = true;
  };
  return (
    <Button color="primary" onclick={handleClick}>
      hello world
    </Button>
  );
  {
    isAlert && <Alert isAlert={isAlert}>My Alert</Alert>;
  }
}
export default App;
