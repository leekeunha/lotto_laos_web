import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <Button onClick={handleClick}>{count}</Button>;
}

export default App;
