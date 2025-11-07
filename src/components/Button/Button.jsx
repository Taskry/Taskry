const Button = ({ children, onClick, ...props }) => {
  const buttonClassName = `px-3 py-2 mx-1 rounded-md ${props?.className}`;
  delete props?.className;
  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
