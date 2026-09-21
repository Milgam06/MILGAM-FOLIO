type IYeojunConstant = {
  name: string;
  en_name: string;
  alias: string;
  birth: string;
  role: string[];
  email: string;
  linkedin: string;
  github: string;
};

type TTimelineMonth = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

export type TTimelineDate = `${number}.${TTimelineMonth}`;

export type TTimelinePeriod =
  | { type: 'single'; date: TTimelineDate; label: string }
  | { type: 'range'; start: TTimelineDate; end: TTimelineDate }
  | { type: 'ongoing'; start: TTimelineDate };

export type ITimelineItem = {
  period: TTimelinePeriod;
  category: 'EDUCATION' | 'ACTIVITY' | 'INTERNSHIP';
  title: string;
  description: string;
};

export const YEOJUN_CONSTANT: IYeojunConstant = {
  name: '박여준',
  en_name: 'Park Yeojun',
  alias: 'MILGAM',
  birth: '2006-08-06',
  role: ['Frontend Developer', 'Backend Developer'],
  email: 'milgamfruit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/%EC%97%AC%EC%A4%80-%EB%B0%95-104377303/',
  github: 'https://github.com/milgam06',
};

export const TIMELINE_ITEMS: ITimelineItem[] = [
  {
    period: { type: 'single', date: '2025.02', label: '졸업' },
    category: 'EDUCATION',
    title: '한세사이버보안고등학교',
    description:
      '고등학교 1학년부터 프론트엔드 개발을 공부했습니다. 교내 전공 동아리에서 웹 보안·포렌식·시스템 보안·암호학을 학습하며, 웹 개발과 보안의 기초를 쌓았습니다.',
  },
  {
    period: { type: 'range', start: '2022.03', end: '2025.02' },
    category: 'ACTIVITY',
    title: '교내 전공 동아리 활동',
    description: '웹 보안·포렌식·시스템 보안·암호학을 학습하며, 다양한 프로젝트와 실습을 통해 실무 역량을 쌓았습니다.',
  },
  {
    period: { type: 'range', start: '2024.09', end: '2024.11' },
    category: 'INTERNSHIP',
    title: '메셔 · 프론트엔드 개발 인턴',
    description:
      '제품의 결과 페이지와 UI 컴포넌트를 개발하고, 마케팅 사이트를 단독 개발해 배포까지 담당했습니다. 사이트 공개 첫날 약 500명의 유입을 이끌었으며, Meta API를 활용한 SNS 게시물 자동 게시 플로우 개발에 참여했습니다.',
  },
  {
    period: { type: 'range', start: '2024.12', end: '2025.03' },
    category: 'INTERNSHIP',
    title: '실비아헬스 · 소프트웨어 엔지니어 인턴',
    description:
      'React·TypeScript 기반 사내 대시보드의 프론트엔드 개발을 단독으로 맡고, 백엔드 쿼리 작업과 개발 환경 구성도 수행했습니다. 인지훈련·검사 제품의 웹·앱 UI와 버그를 개선하고, R&D·기획팀의 피드백을 반영했습니다.',
  },
  {
    period: { type: 'ongoing', start: '2026.03' },
    category: 'EDUCATION',
    title: '고려사이버대학교 · 정보관리보안학부',
    description: '정보관리보안학부에 재학 중이며, 고교에서 시작한 보안 학습을 대학 과정으로 이어가고 있습니다.',
  },
];
