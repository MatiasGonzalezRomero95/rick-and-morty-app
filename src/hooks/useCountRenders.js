import {useRef} from 'react';

// A debug hook to detect unnecessary renders in component
const useCountRenders = () => {
  const renders = useRef(0);

  console.log('renders', renders.current++);
}

export default useCountRenders;