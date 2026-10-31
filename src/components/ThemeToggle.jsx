import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../atoms/todoAtoms';
import useTranslation from '../hooks/useTranslation';

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'claro' ? 'escuro' : 'claro')}
      aria-label={t.themeAria}
    >
      {theme === 'claro' ? t.themeToDark : t.themeToLight}
    </button>
  );
}
