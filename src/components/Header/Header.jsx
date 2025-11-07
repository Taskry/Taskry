import { Icon } from '../Icon/Icon';
import styles from './Header.module.css'; // CSS 모듈 사용

function Header() {
  return (
    <header className={styles.header}>
      <div className="flex gap-2">
        <div className="p-1 rounded-xs bg-main-200">
          <Icon type="kanban" size="30" className="text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-black">Teskry</h1>
        </div>
      </div>

      <nav>{/* 네비게이션 링크들 */}</nav>
    </header>
  );
}

export default Header;
