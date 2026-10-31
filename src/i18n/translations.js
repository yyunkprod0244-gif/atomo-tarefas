export const translations = {
  pt: {
    htmlLang: 'pt-BR',
    pageTitle: 'Átomo · Tarefas em órbita',
    subtitle: 'Suas tarefas em órbita, com estado global via Recoil.',
    placeholder: 'O que você vai fazer hoje?',
    newTaskAria: 'Nova tarefa',
    add: 'Adicionar',
    filters: {
      todas: 'Todas',
      pendentes: 'Pendentes',
      concluidas: 'Concluídas',
    },
    stats: (pending, done, total) =>
      `${pending} pendentes · ${done} concluídas · ${total} no total`,
    empty: 'Nenhuma tarefa por aqui ainda. ✨',
    removeAria: 'Remover tarefa',
    themeToDark: '🌙 Escuro',
    themeToLight: '☀️ Claro',
    themeAria: 'Alternar tema',
    langAria: 'Mudar idioma',
  },
  en: {
    htmlLang: 'en',
    pageTitle: 'Atomo · Tasks in orbit',
    subtitle: 'Your tasks in orbit, with global state powered by Recoil.',
    placeholder: 'What are you going to do today?',
    newTaskAria: 'New task',
    add: 'Add',
    filters: {
      todas: 'All',
      pendentes: 'Pending',
      concluidas: 'Completed',
    },
    stats: (pending, done, total) =>
      `${pending} pending · ${done} completed · ${total} in total`,
    empty: 'No tasks here yet. ✨',
    removeAria: 'Remove task',
    themeToDark: '🌙 Dark',
    themeToLight: '☀️ Light',
    themeAria: 'Toggle theme',
    langAria: 'Change language',
  },
};
