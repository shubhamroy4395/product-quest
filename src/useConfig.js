import { useState } from 'react';
import { initialConfig } from './config';

export const useConfig = () => {
  const [config, setConfig] = useState(initialConfig);

  const toggleSection = (section) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      [section]: !prevConfig[section]
    }));
  };

  const updateMessage = (key, value) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      messages: {
        ...prevConfig.messages,
        [key]: value
      }
    }));
  };

  return { config, toggleSection, updateMessage };
};
