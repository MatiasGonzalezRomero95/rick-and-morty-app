import { useState, useCallback} from "react";
import useDelay from "hooks/useDelay";

const DELAY_TIME = 500;

const useSearch = () => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, [setName])

  // delay the value, useful to not call immediately while user is typing, wait some seconds of user stop typing to star searching
  const debouncedName = useDelay(name, DELAY_TIME);

  return {
    name: debouncedName, // hide the name, client of this class not need to know that this is delayed/debounced
    handleNameChange}
};

export default useSearch;
