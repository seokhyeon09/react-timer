# react-timer (웹 기반 타이머 애플리케이션)

React Hooks의 특성을 깊이 있게 활용하여 개발한 웹 기반 타이머 애플리케이션입니다. 초 단위로 변화하는 시간 데이터를 안정적으로 다루며, 사용자가 직관적으로 시간을 측정하고 제어할 수 있는 기능을 제공합니다.

## Links
- 배포 주소: https://react-timer-rosy.vercel.app/
- GitHub 저장소: https://github.com/seokhyeon09/react-timer

## Tech Stack (사용 기술)
- Framework 및 빌드 도구: React, Vite
- Language: JavaScript
- Styling: CSS

## Key Features (주요 기능)
- 타이머 제어 기능: 시작(Start), 정지(Stop), 초기화(Reset) 버튼을 구현하여 사용자가 타이머의 동작 흐름을 완벽하게 제어할 수 있습니다.
- 상태 기반 UI 업데이트: useState Hook을 사용하여 타이머의 분(Minute)과 초(Second) 상태를 관리하고, 값이 변할 때마다 즉각적으로 화면에 업데이트된 시간이 출력되도록 구현했습니다.
- useRef를 활용한 타이머 데이터 보존: 컴포넌트가 재렌더링되더라도 초기화되지 않아야 하는 중요 데이터(예: 타이머 인터벌 ID, 내부적으로 누적되는 시간 값)를 useRef 객체에 저장했습니다. 이를 통해 일반 변수가 렌더링 시 초기화되는 문제를 방지하고, 성능 저하 없이 정확한 시간을 계속해서 계산하여 화면에 전달합니다.

## 느낀점 / 개선할 점
- 느낀점: 화면을 업데이트해야 할 때는 useState를, 화면 렌더링과 무관하게 값을 안전하게 보존해야 할 때는 useRef를 분리해서 사용해야 한다는 점을 체감하며 컴포넌트 최적화에 대한 시야가 넓어졌습니다.
- 개선할 점: 지금은 단순한 시간 측정 기능을 제공하지만, 중간중간 시간을 기록할 수 있는 랩 타임(Lap Time) 저장 기능을 추가하여 실용성을 높여보고 싶습니다.

## Getting Started (로컬 실행 방법)

1. 저장소 클론 (Clone the repository)
git clone https://github.com/seokhyeon09/react-timer

2. 패키지 설치 (Install dependencies)
npm install

3. 개발 서버 실행 (Run the dev server)
npm run dev
