import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';
import useTranslation from '../hooks/useTranslation';

export default function TodoForm() {
  const [text, setText] = useState('');
  const setList = useSetRecoilState(todoListState);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setList((old) => [{ id: crypto.randomUUID(), text: value, done: false }, ...old]);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t.placeholder}
        aria-label={t.newTaskAria}
      />
      <button type="submit" className="btn-primary">{t.add}</button>
    </form>
  );
}
