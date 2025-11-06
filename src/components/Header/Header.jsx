import styles from './Header.module.css'; // CSS 모듈 사용
import { TbLayoutKanbanFilled } from 'react-icons/tb';

function Header() {
  return (
    <header className={styles.header}>
      <div className="flex gap-2">
        <div className="p-1 rounded-xs bg-[#87BAC3]">
          <TbLayoutKanbanFilled size={30} color="white" />
        </div>
        <div>
          <h1>Teskry</h1>
        </div>
      </div>

      <nav>{/* 네비게이션 링크들 */}</nav>
    </header>
  );
}

export default Header;
