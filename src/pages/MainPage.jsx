function HomePage() {
  return (
    <div>
      <h1>프로젝트 관리</h1>
      <h5>프로젝트를 생성하고 관리해보세요</h5>

      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`
                  h-50
                  border-2
                  border-gray-200
                  rounded-lg
                  flex 
                  items-center 
                  justify-center
                  font-semibold`}
          >
            {`project ${i}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
