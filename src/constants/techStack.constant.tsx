import {
  SiNextdotjs,
  SiVite,
  SiAxios,
  SiRecoil,
  SiReactquery,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiMantine,
  SiStyledcomponents,
  SiFramer,
  SiFontawesome,
  SiVercel,
  SiCloudflare,
  SiDocker,
  SiFirebase,
  SiEslint,
  SiPrettier,
  SiNotion,
  SiGithub,
  SiGoogleanalytics,
  SiStorybook,
  SiFigma,
  SiPostman,
  SiGithubcopilot,
  SiReact,
  SiReactHex,
  SiNextdotjsHex,
  SiGithubcopilotHex,
  SiPostmanHex,
  SiFigmaHex,
  SiAxiosHex,
  SiRecoilHex,
  SiReactqueryHex,
  SiNodedotjsHex,
  SiNestjsHex,
  SiExpressHex,
  SiFastapiHex,
  SiGraphqlHex,
  SiTypescriptHex,
  SiPostgresqlHex,
  SiMysqlHex,
  SiSupabaseHex,
  SiPrismaHex,
  SiMantineHex,
  SiStyledcomponentsHex,
  SiFramerHex,
  SiFontawesomeHex,
  SiVercelHex,
  SiCloudflareHex,
  SiDockerHex,
  SiFirebaseHex,
  SiEslintHex,
  SiPrettierHex,
  SiNotionHex,
  SiGithubHex,
  SiGoogleanalyticsHex,
  SiStorybookHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiViteHex,
  SiPythonHex,
} from '@icons-pack/react-simple-icons';
import { memo, ReactNode } from 'react';
import Image from 'next/image';

export enum ETECH_STACK_KIND {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  LANGUAGE = 'language',
  DATABASE = 'database',
  API = 'api',
  STATE = 'state',
  ORM = 'orm',
  STYLE = 'style',
  INFRA = 'infra',
  CICD = 'CI/CD',
  TOOL = 'tool',
}

export type ITechStackConstant = {
  name: string;
  kind: ETECH_STACK_KIND;
  icon: ReactNode;
  tier: 'MAIN' | 'USED';
};

const CodeIcon = memo(() => {
  return (
    <Image src="/icons/code.svg" alt="" width={24} height={24} style={{ objectFit: 'contain', filter: 'invert(1)' }} />
  );
});

export const TECH_STACK_CONSTANT: ITechStackConstant[] = [
  { name: 'React', kind: ETECH_STACK_KIND.FRONTEND, tier: 'MAIN', icon: <SiReact size={24} color={SiReactHex} /> },
  {
    name: 'React Native',
    kind: ETECH_STACK_KIND.FRONTEND,
    tier: 'MAIN',
    icon: <SiReact size={24} color={SiReactHex} />,
  },
  {
    name: 'Next.js',
    kind: ETECH_STACK_KIND.FRONTEND,
    tier: 'MAIN',
    icon: <SiNextdotjs size={24} color={SiNextdotjsHex} />,
  },
  { name: 'Vite', kind: ETECH_STACK_KIND.TOOL, tier: 'MAIN', icon: <SiVite size={24} color={SiViteHex} /> },
  { name: 'Axios', kind: ETECH_STACK_KIND.API, tier: 'USED', icon: <SiAxios size={24} color={SiAxiosHex} /> },
  {
    name: 'Zustand',
    kind: ETECH_STACK_KIND.STATE,
    tier: 'MAIN',
    icon: <CodeIcon />,
  },
  { name: 'Recoil', kind: ETECH_STACK_KIND.STATE, tier: 'USED', icon: <SiRecoil size={24} color={SiRecoilHex} /> },
  {
    name: 'TanStack Query',
    kind: ETECH_STACK_KIND.STATE,
    tier: 'USED',
    icon: <SiReactquery size={24} color={SiReactqueryHex} />,
  },
  {
    name: 'Node.js',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'MAIN',
    icon: <SiNodedotjs size={24} color={SiNodedotjsHex} />,
  },
  {
    name: 'NestJS',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'MAIN',
    icon: <SiNestjs size={24} color={SiNestjsHex} />,
  },
  {
    name: 'Express',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'MAIN',
    icon: <SiExpress size={24} color={SiExpressHex} />,
  },
  {
    name: 'FastAPI',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'USED',
    icon: <SiFastapi size={24} color={SiFastapiHex} />,
  },
  {
    name: 'GraphQL',
    kind: ETECH_STACK_KIND.API,
    tier: 'MAIN',
    icon: <SiGraphql size={24} color={SiGraphqlHex} />,
  },
  {
    name: 'REST API',
    kind: ETECH_STACK_KIND.API,
    tier: 'MAIN',
    icon: <CodeIcon />,
  },
  {
    name: 'TypeScript',
    kind: ETECH_STACK_KIND.LANGUAGE,
    tier: 'MAIN',
    icon: <SiTypescript size={60} color={SiTypescriptHex} />,
  },
  {
    name: 'JavaScript',
    kind: ETECH_STACK_KIND.LANGUAGE,
    tier: 'MAIN',
    icon: <SiJavascript size={24} color="#F7DF1E" />,
  },
  {
    name: 'Python',
    kind: ETECH_STACK_KIND.LANGUAGE,
    tier: 'USED',
    icon: <SiPython size={24} color={SiPythonHex} />,
  },
  {
    name: 'PostgreSQL',
    kind: ETECH_STACK_KIND.DATABASE,
    tier: 'MAIN',
    icon: <SiPostgresql size={24} color={SiPostgresqlHex} />,
  },
  { name: 'MySQL', kind: ETECH_STACK_KIND.DATABASE, tier: 'USED', icon: <SiMysql size={24} color={SiMysqlHex} /> },
  {
    name: 'Supabase',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'MAIN',
    icon: <SiSupabase size={24} color={SiSupabaseHex} />,
  },
  { name: 'Prisma', kind: ETECH_STACK_KIND.ORM, tier: 'MAIN', icon: <SiPrisma size={24} color={SiPrismaHex} /> },
  {
    name: 'Mantine',
    kind: ETECH_STACK_KIND.STYLE,
    tier: 'MAIN',
    icon: <SiMantine size={24} color={SiMantineHex} />,
  },
  {
    name: 'styled-components',
    kind: ETECH_STACK_KIND.STYLE,
    tier: 'MAIN',
    icon: <SiStyledcomponents size={24} color={SiStyledcomponentsHex} />,
  },
  {
    name: 'Framer Motion',
    kind: ETECH_STACK_KIND.STYLE,
    tier: 'MAIN',
    icon: <SiFramer size={24} color={SiFramerHex} />,
  },
  {
    name: 'Reanimated',
    kind: ETECH_STACK_KIND.STYLE,
    tier: 'MAIN',
    icon: <Image src="/icons/reanimated.svg" alt="" width={24} height={24} style={{ objectFit: 'contain' }} />,
  },
  {
    name: 'FontAwesome',
    kind: ETECH_STACK_KIND.STYLE,
    tier: 'MAIN',
    icon: <SiFontawesome size={24} color={SiFontawesomeHex} />,
  },
  { name: 'Vercel', kind: ETECH_STACK_KIND.INFRA, tier: 'MAIN', icon: <SiVercel size={24} color={SiVercelHex} /> },
  {
    name: 'Cloudflare',
    kind: ETECH_STACK_KIND.INFRA,
    tier: 'USED',
    icon: <SiCloudflare size={24} color={SiCloudflareHex} />,
  },
  { name: 'Docker', kind: ETECH_STACK_KIND.INFRA, tier: 'MAIN', icon: <SiDocker size={24} color={SiDockerHex} /> },
  {
    name: 'AWS',
    kind: ETECH_STACK_KIND.INFRA,
    tier: 'USED',
    icon: <CodeIcon />,
  },
  {
    name: 'Oracle',
    kind: ETECH_STACK_KIND.INFRA,
    tier: 'MAIN',
    icon: <CodeIcon />,
  },
  {
    name: 'Firebase',
    kind: ETECH_STACK_KIND.BACKEND,
    tier: 'MAIN',
    icon: <SiFirebase size={24} color={SiFirebaseHex} />,
  },
  { name: 'ESLint', kind: ETECH_STACK_KIND.TOOL, tier: 'MAIN', icon: <SiEslint size={24} color={SiEslintHex} /> },
  {
    name: 'Prettier',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'MAIN',
    icon: <SiPrettier size={24} color={SiPrettierHex} />,
  },
  { name: 'Notion', kind: ETECH_STACK_KIND.TOOL, tier: 'MAIN', icon: <SiNotion size={24} color={SiNotionHex} /> },
  { name: 'GitHub', kind: ETECH_STACK_KIND.TOOL, tier: 'MAIN', icon: <SiGithub size={24} color={SiGithubHex} /> },
  {
    name: 'OpenAI',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'MAIN',
    icon: <CodeIcon />,
  },
  {
    name: 'Google Analytics',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'USED',
    icon: <SiGoogleanalytics size={24} color={SiGoogleanalyticsHex} />,
  },
  {
    name: 'Storybook',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'USED',
    icon: <SiStorybook size={24} color={SiStorybookHex} />,
  },
  {
    name: 'GitHub Actions',
    kind: ETECH_STACK_KIND.CICD,
    tier: 'MAIN',
    icon: <SiGithubactions size={24} color={SiGithubactionsHex} />,
  },
  { name: 'Figma', kind: ETECH_STACK_KIND.TOOL, tier: 'USED', icon: <SiFigma size={24} color={SiFigmaHex} /> },
  {
    name: 'Postman',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'MAIN',
    icon: <SiPostman size={24} color={SiPostmanHex} />,
  },
  {
    name: 'GitHub Copilot',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'MAIN',
    icon: <SiGithubcopilot size={24} color={SiGithubcopilotHex} />,
  },
  {
    name: 'Twilio',
    kind: ETECH_STACK_KIND.TOOL,
    tier: 'USED',
    icon: <CodeIcon />,
  },
];

type ITechStackCategory = {
  id: ETECH_STACK_KIND;
  label: string;
  name: string;
  description: string;
};

export const TECH_STACK_CATEGORY_CONSTANT: ITechStackCategory[] = [
  {
    id: ETECH_STACK_KIND.FRONTEND,
    label: 'FRONT',
    name: 'Frontend',
    description:
      '사용자 인터페이스와 웹 애플리케이션 구조를 구현하고, 화면의 상태와 데이터를 관리할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.BACKEND,
    label: 'BACK',
    name: 'Backend',
    description: '서버의 비즈니스 로직을 구현하고 클라이언트와 데이터를 주고받는 API를 설계할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.LANGUAGE,
    label: 'LANG',
    name: 'Language',
    description: '웹 애플리케이션과 서버를 개발하고 필요한 동작을 코드로 표현할 때 사용하는 언어입니다.',
  },
  {
    id: ETECH_STACK_KIND.DATABASE,
    label: 'DB',
    name: 'Database',
    description: '데이터를 구조화하여 저장하고 애플리케이션에서 조회하고 관리할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.API,
    label: 'API',
    name: 'API',
    description: '클라이언트와 서버 간의 데이터 통신을 설계하고 구현할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.STATE,
    label: 'STATE',
    name: 'State',
    description: '애플리케이션의 상태를 관리하고 컴포넌트 간의 데이터 흐름을 제어할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.ORM,
    label: 'ORM',
    name: 'ORM',
    description: '데이터베이스와 애플리케이션 간의 객체 관계를 매핑하고 관리할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.STYLE,
    label: 'STYLE',
    name: 'Style',
    description: '일관된 UI를 구성하고 스타일과 애니메이션으로 사용자 경험을 다듬을 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.INFRA,
    label: 'INFRA',
    name: 'Infrastructure',
    description:
      '애플리케이션을 운영하고 배포하는 데 필요한 서버, 네트워크, 클라우드 환경을 관리할 때 사용하는 기술입니다.',
  },
  {
    id: ETECH_STACK_KIND.CICD,
    label: 'CI/CD',
    name: 'CI / CD',
    description: '애플리케이션을 배포하고 변경 사항을 서비스에 반영할 때 사용하는 플랫폼입니다.',
  },
  {
    id: ETECH_STACK_KIND.TOOL,
    label: 'TOOL',
    name: 'Tools',
    description: '코드 품질 관리부터 설계, 협업, 테스트까지 개발 과정을 돕는 도구입니다.',
  },
];
