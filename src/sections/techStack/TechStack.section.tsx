'use client';

import { SectionHeader, SectionLayout, TechStackBox } from '@/components';
import { ETECH_STACK_KIND, TECH_STACK_CATEGORY_CONSTANT, TECH_STACK_CONSTANT } from '@/constants';
import { Flex, rem, SimpleGrid, Tabs, Text } from '@mantine/core';
import { FocusEvent, memo, useCallback, useMemo, useState } from 'react';

export const TechStackSection = memo(() => {
  const categories = useMemo(
    () =>
      TECH_STACK_CATEGORY_CONSTANT.map((item) => ({
        ...item,
        stacks: TECH_STACK_CONSTANT.filter((stack) => stack.kind === item.id),
      })),
    [],
  );
  const [category, setCategory] = useState<ETECH_STACK_KIND>(categories[0].id);
  const [hoveredCategory, setHoveredCategory] = useState<ETECH_STACK_KIND | null>(null);
  const categoryIndex = categories.findIndex((item) => item.id === category);
  const currentCategoryCount = (categoryIndex + 1).toString().padStart(2, '0');
  const totalCategoryCount = categories.length.toString().padStart(2, '0');

  const updateCategory = useCallback(
    (value: string | null) => {
      if (value === null) {
        return;
      }
      const selectedCategory = categories.find((item) => item.id === value);
      if (selectedCategory) {
        setCategory(selectedCategory.id);
      }
    },
    [categories],
  );
  const handleMouseEnter = useCallback((currentCategory: ETECH_STACK_KIND) => {
    setHoveredCategory(currentCategory);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCategory(null);
  }, []);

  const handleTabFocus = useCallback((event: FocusEvent<HTMLButtonElement>) => {
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, []);

  return (
    <SectionLayout bg="dark.0">
      <Flex
        w="100%"
        direction="column"
        px={{ base: rem(20), sm: rem(40), md: rem(50), lg: rem(140) }}
        py={{ base: rem(60), md: rem(80) }}
        gap={rem(40)}>
        <SectionHeader
          label="TECH STACK"
          title="Tools I Work With"
          description="기술 이름을 단순히 나열하기보다 실제 개발 과정에서 어떤 영역에 사용하고 있는지 분류하여 정리했습니다."
        />
        <Flex
          w="100%"
          direction="row"
          justify="flex-end"
          align="center"
          gap={rem(6)}
          fz={rem(12)}
          c="dark.5"
          lts="0.16em"
          lh={1.5}>
          <Text c="brand.5" fw={600}>
            {currentCategoryCount}
          </Text>
          <Text c="dark.5">/</Text>
          <Text c="dark.5">{totalCategoryCount}</Text>
        </Flex>
        <Tabs value={category} onChange={updateCategory} keepMounted={false}>
          <Flex style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
            <Tabs.List
              w="100%"
              grow
              bd="0px"
              style={{
                flexWrap: 'nowrap',
                minWidth: 'max-content',
                borderBottom: '1px solid var(--mantine-color-dark-2)',
              }}>
              {categories.map((item) => (
                <Tabs.Tab
                  key={item.id}
                  value={item.id}
                  mih={rem(76)}
                  px={rem(20)}
                  py={rem(20)}
                  c={category === item.id || hoveredCategory === item.id ? 'dark.7' : 'dark.5'}
                  bg="transparent"
                  style={{
                    borderColor: 'transparent',
                  }}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleTabFocus}>
                  <Flex direction="column" align="flex-start" gap={rem(8)}>
                    <Text fz={rem(11)} fw={400} lts="0.14em">
                      {item.label}
                    </Text>
                    <Text fz={rem(16)} fw={600}>
                      {item.name}
                    </Text>
                  </Flex>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Flex>
          {categories.map((item) => (
            <Tabs.Panel key={item.id} value={item.id} pt={{ base: rem(32), md: rem(48) }}>
              <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: rem(32), md: rem(48) }} align="flex-start">
                <Flex direction="column" gap={rem(14)} w={{ base: '100%', md: '35%' }} style={{ flexShrink: 0 }}>
                  <Text fz={{ base: rem(36), md: rem(52) }} fw={700} c="dark.7" lh={1.1}>
                    {item.name}
                  </Text>
                  <Text fz={{ base: rem(16), md: rem(18) }} c="dark.5" lh={1.5}>
                    {item.description}
                  </Text>
                  <Text fz={rem(12)} c="dark.5" lts="0.14em" lh={1.5} mt={{ base: rem(8), md: rem(20) }}>
                    {String(item.stacks.length).padStart(2, '0')} —— TECHNOLOGIES
                  </Text>
                </Flex>
                <SimpleGrid
                  w="100%"
                  cols={{ base: 1, sm: 2 }}
                  spacing={rem(16)}
                  verticalSpacing={rem(16)}
                  miw={0}
                  m={0}
                  p={0}>
                  {item.stacks.length === 0 && (
                    <Text c="dark.5" lh={1.5} style={{ listStyle: 'none' }}>
                      등록된 기술이 없습니다.
                    </Text>
                  )}
                  {item.stacks.map((techStack) => (
                    <TechStackBox key={techStack.name} techStack={techStack} />
                  ))}
                </SimpleGrid>
              </Flex>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Flex>
    </SectionLayout>
  );
});
