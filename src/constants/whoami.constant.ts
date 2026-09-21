export type IWhoamiDescription = {
  number: string;
  category: string;
  title: string;
  description: string;
};

export const WHOAMI_DESCRIPTION_CONSTANT: IWhoamiDescription[] = [
  { number: '01', category: 'UX', title: '자연스러운 흐름', description: '사용자가 고민하지 않아도 이해되는 인터페이스를 지향합니다.' },
  { number: '02', category: 'CODE', title: '유지되는 구조', description: '재사용 가능한 컴포넌트와 명확한 규칙으로 구현합니다.' },
  { number: '03', category: 'SECURITY', title: '신뢰할 수 있는 웹', description: '보안 관점을 사용자 경험과 개발 과정에 함께 담습니다.' },
];
