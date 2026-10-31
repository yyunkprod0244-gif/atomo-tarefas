import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodos';
import TodoItem from './TodoItem';
import useTranslation from '../hooks/useTranslation';

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);
  const { t } = useTranslation();

  if (todos.length === 0) {
    return <p className="empty">{t.empty}</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
}
