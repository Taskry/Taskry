## 🚀Taskry
Project of "DAN_DA_DAN"

칸반보드 기반 프로젝트 관리 협업 환경을 제공하는 웹 기반 협업툴입니다.

## 💡 개요
- **업무 진행 현황의 시각화**: 업무의 진행 상태를 단계별로 구분화하여 시각적으로 표현 및 상태를 손쉽게 변경 할 수 있도록 구현합니다.
- **직관적이고 간결한 사용자 경험(UX)제공**:  사용자가 복잡한 기능 없이도 쉽게 이해하고 사용할 수 있는 UI를 구현합니다. 더불어 반응형 디자인을 적용해 PC, 모바일 등 다양한 환경에서 접근이 가능하도록 구현합니다.
- **협업 환경 구축**: 사용자 작업 현황이 즉시 반영되도록 하여 원활한 협업이 가능할 수 있도록 설계합니다.
- **유연하고 확장 가능한 일정**: 일정 추가, 삭제, 수정 및 팀원, 중요도 기반 필터링, 검색 기능을 통해서 원하는 정보를 빠르고 유연하게 제공합니다.

## 🛠️기술 스택
- 기술 스텍
    - React + JavaScript: 핵심 프론트엔드 라이브 언어
    - Vite: 빌드 도구
    - npm: 패키지 관리 도구
    - React Context: 상태 관리 도구
    - ESLint + Prettier: 코드 스타일 및 포맷팅 도구
    - TailwindCSS: 빠르고 일관된 UI 스타일링에 사용
    - firebase: google OAuth, 데이터베이스
- 사용 도구
    - VS Code: 통합 개발 환경
    - Git, GitHub: 버전 관리
    - Figma, Notion, Discord: 협업 및 문서화
    - Chrome DevTools: 기타 테스트/디버깅
## 📦 설치 및 실행 방법
### 1. 저장소 복제
```
git clone https://github.com/Taskry/Taskry.git
```

### 2. 의존성 설치
```
npm install
```

### 3. 실행
```
npm run dev
```

## 📁 프로젝트 구조
``` 
├── public/
│   └── index.html           // 앱의 진입점 HTML 파일
├── src/
│   ├── components/          // 재사용 가능한 UI 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Modal/
│   │   │   ├── Card.jsx     // 카드 관련 Modal
│   │   │   └── card.module.css  // 카드 관련 Modal
│   │   └── ...
│   ├── pages/               // 라우팅되는 페이지 컴포넌트 (특정 경로에 맵핑)
│   │   ├── MainPage.jsx     // 메인 페이지 (프로젝트 리스트)
│   │   ├── BoardPage.jsx    // 칸반보드 페이지
│   │   ├── ProjectPage.jsx  // 프로젝트 상세정보 페이지
│   │   └── ...
│   ├── assets/              // 이미지, 폰트 등 정적 자산 (JS 파일에서 임포트)
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── fonts/
│   ├── styles/              // 전역 스타일 또는 공통 스타일 변수
│   │   ├── global.css
│   │   └── variables.css
│   ├── services/            // 공통 로직
│   │   ├── api.js           // API 호출 관련 함수
│   │   └── constants.js     // 전역 상수
│   └── App.js               // 메인 애플리케이션 컴포넌트 (라우팅 등 포함)
├── .gitignore               // Git에서 무시할 파일 목록
├── package.json             // 프로젝트 정보 및 의존성
└── README.md                // 프로젝트 설명
```

🙏 감사합니다

이 프로젝트에 관심을 가져주셔서 감사합니다!