import { useState, createContext } from 'react';

export const InteractContext = createContext(null);

export function InteractProvider({ children }) {
  const [info, setInfo] = useState('');
  const [message, setMessage] = useState(null);
  const [storageActions, setStorageActions] = useState(false);
  const [characterActions, setCharacterActions] = useState(false);

  function select(selection) {
    setInfo(selection);
  }

  function alert(message) {
    setMessage(message);
  }

  function enableActions(type) {
    switch (type) {
      case 'storage':
        setStorageActions(true);
        break;
      case 'character':
        setCharacterActions(true);
        break;
      default:
        break;
    }
  }

  function disableActions() {
    setStorageActions(false);
    setCharacterActions(false);
  }

  return (
    <InteractContext.Provider
      value={{
        select,
        info,
        alert,
        message,
        enableActions,
        disableActions,
        storageActions,
        characterActions,
      }}
    >
      {children}
    </InteractContext.Provider>
  );
}
