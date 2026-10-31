import { useRecoilState, useRecoilValue } from 'recoil';
import { todoFilterState } from '../atoms/todoAtoms';
import { todoStatsState } from '../selectors/filteredTodos';
import useTranslation from '../hooks/useTranslation';

const FILTER_IDS = ['todas', 'pendentes', 'concluidas'];

export default function FilterBar() {
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const stats = useRecoilValue(todoStatsState);
  const { t } = useTranslation();

  return (
    <div className="filter-bar">
      <div className="chips">
        {FILTER_IDS.map((id) => (
          <button
            key={id}
            className={`chip ${filter === id ? 'active' : ''}`}
            onClick={() => setFilter(id)}
          >
            {t.filters[id]}
          </button>
        ))}
      </div>
      <p className="stats">{t.stats(stats.pending, stats.done, stats.total)}</p>
    </div>
  );
}
