import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}
