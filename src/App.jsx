import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import TodoForm from './components/TodoForm';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';
import useTranslation from './hooks/useTranslation';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="header">
        <div className="orbit" aria-hidden="true">
          <span className="nucleus" />
          <span className="ring r1"><i /></span>
          <span className="ring r2"><i /></span>
          <span className="ring r3"><i /></span>
        </div>
        <div>
          <h1>Átomo</h1>
          <p className="subtitle">{t.subtitle}</p>
        </div>
        <div className="controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="card">
        <TodoForm />
        <FilterBar />
        <TodoList />
      </main>

      <footer className="footer">© 2026 Douglas Henrique</footer>
    </div>
  );
}
