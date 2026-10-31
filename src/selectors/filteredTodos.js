import { selector } from 'recoil';
import { todoListState, todoFilterState } from '../atoms/todoAtoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilterState);
    if (filter === 'concluidas') return list.filter((t) => t.done);
    if (filter === 'pendentes') return list.filter((t) => !t.done);
    return list;
  },
});

export const todoStatsState = selector({
  key: 'todoStatsState',
  get: ({ get }) => {
    const list = get(todoListState);
    const done = list.filter((t) => t.done).length;
    return { total: list.length, done, pending: list.length - done };
  },
});
