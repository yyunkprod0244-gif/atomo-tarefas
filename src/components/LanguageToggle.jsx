import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { languageState } from '../atoms/todoAtoms';
import { translations } from '../i18n/translations';

const LANGS = [
  { id: 'pt', label: 'PT-BR' },
  { id: 'en', label: 'EN' },
];

export default function LanguageToggle() {
  const [lang, setLang] = useRecoilState(languageState);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('lang', t.htmlLang);
    document.title = t.pageTitle;
  }, [t]);

  return (
    <div className="lang-toggle" role="group" aria-label={t.langAria}>
      {LANGS.map((l) => (
        <button
          key={l.id}
          className={`lang-btn ${lang === l.id ? 'active' : ''}`}
          onClick={() => setLang(l.id)}
          aria-pressed={lang === l.id}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
