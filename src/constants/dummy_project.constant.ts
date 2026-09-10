export type IProject = {
  id: string;
  status: 'released' | 'onAir' | 'archived';
  category: string;
  title: string;
  description: string;
  stack: string[];
  result: string;
  planning: string[];
  dev: string[];
  demoUrl?: string;
  githubUrl?: string;
};

// 데모 디자인 확인용 데이터입니다. 실제 프로젝트 정보로 교체할 예정입니다.
export const DUMMY_PROJECT_CONSTANT: IProject[] = [
  {
    id: 'archive-studio',
    status: 'onAir',
    category: 'PORTFOLIO CMS EXPERIMENT',
    title: 'Archive Studio',
    description: '프로젝트, 글, 실험 기록을 하나의 아카이브로 묶는 개인 브랜딩 시스템입니다.',
    stack: ['Mantine', 'MDX'],
    result: 'Currently designing editor flow',
    planning: [
      '프로젝트와 글, 실험 기록을 한 곳에서 탐색할 수 있도록 콘텐츠 구조를 설계했습니다.',
      '카드에서는 핵심 정보를 전달하고 상세 모달에서 작업 과정과 결과를 설명합니다.',
      '기록을 지속적으로 추가할 수 있는 에디터 흐름을 기획하고 있습니다.',
    ],
    dev: [
      'Mantine theme token을 기준으로 surface, text, brand 색상 체계를 분리했습니다.',
      'MDX 기반 콘텐츠 확장을 고려해 프로젝트 데이터와 상세 콘텐츠 구조를 분리하고 있습니다.',
      '카드 리스트와 상세 모달을 독립 컴포넌트로 나누어 프로젝트 개수가 늘어나도 유지보수하기 쉽게 설계했습니다.',
    ],
  },
  {
    id: 'logbook',
    status: 'released',
    category: 'PERSONAL PRODUCTIVITY TOOL',
    title: 'Logbook',
    description: '개발 기록, 회고, 작업 로그를 한 곳에서 관리하는 개인 생산성 웹앱입니다.',
    stack: ['Next.js', 'Supabase'],
    result: 'Daily writing flow improved',
    planning: ['매일 짧게 기록할 수 있는 작성 흐름을 설계했습니다.', '개발 기록과 회고를 주제별로 탐색할 수 있도록 구성했습니다.'],
    dev: ['작성 화면과 기록 목록을 분리해 화면 구성을 단순화했습니다.', '저장 상태와 오류 안내를 통해 작성 내용을 확인할 수 있도록 구성했습니다.'],
  },
  {
    id: 'safe-route',
    status: 'released',
    category: 'SECURITY LEARNING PLATFORM',
    title: 'SafeRoute',
    description: '웹 보안 개념을 짧은 실습 카드로 학습할 수 있도록 설계한 교육형 프로젝트입니다.',
    stack: ['React', 'TypeScript'],
    result: 'Built quiz and progress UI',
    planning: ['보안 개념을 짧은 설명과 퀴즈로 나누어 학습 부담을 줄였습니다.', '학습 진행 상황을 확인하며 다음 실습으로 이동하도록 설계했습니다.'],
    dev: ['퀴즈 선택과 결과 피드백을 재사용 가능한 UI로 구성했습니다.', 'TypeScript로 학습 항목과 진행 상태의 데이터 구조를 정의했습니다.'],
  },
  {
    id: 'milgamfolio-v1',
    status: 'archived',
    category: 'PORTFOLIO ARCHIVE',
    title: 'Milgamfolio v1',
    description: '이전 포트폴리오의 구조와 개선점을 기록하기 위한 아카이브 프로젝트입니다.',
    stack: ['Vite', 'React'],
    result: 'Redesigned as cinematic portfolio',
    planning: ['이전 포트폴리오의 정보 구조와 탐색 경험을 돌아보았습니다.', '프로젝트의 결과와 작업 과정을 함께 전달하는 방향으로 개선점을 정리했습니다.'],
    dev: ['섹션 단위로 화면을 분리해 콘텐츠를 관리했습니다.', '다양한 화면 크기에서 읽기 쉬운 레이아웃으로 개선했습니다.'],
  },
];
