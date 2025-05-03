import { useThemeContext } from '../hooks/useThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      <span className="toggle-btn__icon">
        {theme === 'light' ? <HiSun /> : <HiMoon />}
      </span>
      <span className="toggle-btn__text">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </button>
  );
}
