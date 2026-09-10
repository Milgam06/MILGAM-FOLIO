'use client';

import { ProjectBox, ProjectDetailModal, SectionHeader, SectionLayout } from '@/components';
import { DUMMY_PROJECT_CONSTANT, IProject } from '@/constants';
import { Button, Flex, rem, SimpleGrid } from '@mantine/core';
import { memo, useMemo, useState } from 'react';

const PROJECT_FILTERS: { value: 'all' | IProject['status']; label: string }[] = [
  { value: 'all', label: 'ALL' },
  { value: 'released', label: 'RELEASED' },
  { value: 'onAir', label: 'ON AIR' },
  { value: 'archived', label: 'ARCHIVED' },
];

export const ProjectSection = memo(() => {
  const [filter, setFilter] = useState<'all' | IProject['status']>('all');
  const [project, setProject] = useState<IProject | null>(null);
  const [opened, setOpened] = useState(false);
  const projects = useMemo(() => {
    const filteredProjects = DUMMY_PROJECT_CONSTANT.filter((item) => filter === 'all' || item.status === filter);
    return filteredProjects;
  }, [filter]);
  return (
    <SectionLayout bg="dark.0">
      <Flex
        w="100%"
        direction="column"
        px={{ base: rem(20), sm: rem(40), md: rem(50), lg: rem(140) }}
        py={{ base: rem(60), md: rem(80) }}
        gap={rem(40)}>
        <SectionHeader
          label="PROJECTS"
          title="Selected Works"
          description="프로젝트 카드는 썸네일, 상태, 타이틀, 한 줄 설명만 유지하고 상세 내용은 클릭 후 확장되는 구조로 설계했습니다."
        />
        <Flex justify="flex-end" wrap="wrap" gap={rem(8)}>
          {PROJECT_FILTERS.map((item) => (
            <Button
              key={item.value}
              onClick={() => setFilter(item.value)}
              radius="xl"
              variant="outline"
              color={filter === item.value ? 'brand.5' : 'dark.2'}
              c={filter === item.value ? '#f1b5aa' : 'dark.5'}
              bg={filter === item.value ? 'rgba(184, 74, 63, 0.1)' : 'transparent'}
              fw={500}
              styles={{ label: { letterSpacing: '0.12em' } }}>
              {item.label}
            </Button>
          ))}
        </Flex>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={rem(24)} verticalSpacing={rem(24)}>
          {projects.map((item) => (
            <ProjectBox
              key={item.id}
              project={item}
              onOpen={() => {
                setProject(item);
                setOpened(true);
              }}
            />
          ))}
        </SimpleGrid>
        <ProjectDetailModal project={project} opened={opened} onClose={() => setOpened(false)} />
      </Flex>
    </SectionLayout>
  );
});
