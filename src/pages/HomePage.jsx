import Button from '../components/Button/Button'; // Button 컴포넌트 재사용

function HomePage() {
  const handleLearnMoreClick = () => {
    alert('더 알아보기 버튼 클릭!');
  };

  return (
    <div>
      <h2>Welcome to DAN DA DAN!</h2>      
    </div>
  );
}

export default HomePage;  