# Átomo · Tarefas em órbita

Lista de tarefas (To-do List) com gerenciamento de estado global via **Recoil**.

## Conceitos aplicados

- `RecoilRoot` como provedor de estado global (`src/main.jsx`)
- **Átomos**: lista de tarefas, filtro ativo, tema e idioma (`src/atoms/todoAtoms.js`)
- **Seletores**: lista filtrada e estatísticas (`src/selectors/filteredTodos.js`)
- **Hooks**: `useRecoilState`, `useRecoilValue` e `useSetRecoilState`

## Funcionalidades

- Adicionar, concluir e remover tarefas
- Filtrar entre todas, pendentes e concluídas
- Botão de tema claro/escuro
- Botão de idioma Português (PT-BR) / English
- Layout responsivo

## Como rodar

```bash
npm install
npm run dev
```

> O Recoil funciona com React 18, por isso o projeto usa essa versão.

## Estrutura

```
src/
├── atoms/          # átomos do Recoil
├── selectors/      # seletores do Recoil
├── components/     # formulário, lista, filtros e botões
├── hooks/          # useTranslation
├── i18n/           # textos em português e inglês
├── App.jsx
├── main.jsx
└── index.css
```

© 2026 Douglas Henrique
