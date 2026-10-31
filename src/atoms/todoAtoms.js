import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// 'todas' | 'concluidas' | 'pendentes'
export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'todas',
});

// 'claro' | 'escuro'
export const themeState = atom({
  key: 'themeState',
  default: 'claro',
});

// 'pt' | 'en'
export const languageState = atom({
  key: 'languageState',
  default: 'pt',
});
