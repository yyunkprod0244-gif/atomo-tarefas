import { useRecoilValue } from 'recoil';
import { languageState } from '../atoms/todoAtoms';
import { translations } from '../i18n/translations';

export default function useTranslation() {
  const lang = useRecoilValue(languageState);
  return { t: translations[lang], lang };
}
