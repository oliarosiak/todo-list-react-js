import { useState, useEffect } from 'react';

export default function useLocalStorage(key, dafaultValue) {

  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? dafaultValue
  });
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
