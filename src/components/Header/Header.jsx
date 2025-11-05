import styles from './Header.module.css'; // CSS 모듈 사용
// import logo from '../../assets/images/logo.png'; // 이미지 임포트

function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      <h1>Teskry</h1>
      <nav>
        {/* 네비게이션 링크들 */}
      </nav>
    </header>
  );
}

export default Header;