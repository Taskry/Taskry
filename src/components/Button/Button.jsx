import styles from './Button.module.css';

function Button({ children, onClick, variant = 'primary', ...props }) {
  const buttonClassName = `${styles.button} ${styles[variant]}`;
  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;