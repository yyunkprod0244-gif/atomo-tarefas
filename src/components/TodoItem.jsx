import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';
import useTranslation from '../hooks/useTranslation';

export default function TodoItem({ item }) {
  const [list, setList] = useRecoilState(todoListState);
  const { t } = useTranslation();

  const toggle = () =>
    setList(list.map((todo) => (todo.id === item.id ? { ...todo, done: !todo.done } : todo)));

  const remove = () => setList(list.filter((todo) => todo.id !== item.id));

  return (
    <li className={`todo-item ${item.done ? 'done' : ''}`}>
      <label>
        <input type="checkbox" checked={item.done} onChange={toggle} />
        <span>{item.text}</span>
      </label>
      <button className="btn-remove" onClick={remove} aria-label={t.removeAria}>✕</button>
    </li>
  );
}
