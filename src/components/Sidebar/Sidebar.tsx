import { memo, FC } from 'react';
import cls from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: FC = memo(() => {
  const location = useLocation();

  const tabs = [
    { name: 'all', value: '/' },
    { name: 'deleted', value: '/deleted' },
  ];

  return (
    <div className={cls.Sidebar}>
      {tabs.map((item) => {
        const isSelected = location.pathname === item.value ? cls.selected : '';
        return (
          <Link to={item.value} key={item.value} className={`${cls.tab} ${isSelected}`}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
