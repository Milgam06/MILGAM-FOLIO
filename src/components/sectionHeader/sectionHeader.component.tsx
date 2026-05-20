import { Flex, rem, Text } from '@mantine/core';
import { memo } from 'react';

type ISectionHeader = {
  label: string;
  title: string;
  description?: string;
};

export const SectionHeader = memo<ISectionHeader>(({ label, title, description }) => {
  return (
    <Flex direction="column" justify="center" gap={rem(16)}>
      <Text fz={rem(16)} c="brand.5" fw={500} lts="0.12em">
        {label}
      </Text>
      <Text fz={{ base: rem(32), sm: rem(44), md: rem(52) }} fw={700} c="dark.7" lh={1.1}>
        {title}
      </Text>
      {description && (
        <Text fz={{ base: rem(14), sm: rem(16), md: rem(20) }} c="dark.4" lh={1.4} style={{ wordBreak: 'break-word' }}>
          {description}
        </Text>
      )}
    </Flex>
  );
});
