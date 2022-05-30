import { useEffect, useState } from "react";

export default function UsePersistedStateTheme(key: string, DefaultValue: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return DefaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
