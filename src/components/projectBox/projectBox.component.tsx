import { IProject } from '@/constants';
import { Badge, Box, Flex, rem, Text, UnstyledButton } from '@mantine/core';
import { memo } from 'react';

type IProjectBox = {
  project: IProject;
  onOpen: () => void;
};

export const ProjectBox = memo<IProjectBox>(({ project, onOpen }) => {
  const isOnAirProject = project.status === 'onAir';
  return (
    <UnstyledButton
      onClick={onOpen}
      w="100%"
      h="100%"
      p={rem(18)}
      bg="dark.1"
      bd={`1px solid ${isOnAirProject ? 'rgba(184, 74, 63, 0.45)' : 'var(--mantine-color-dark-2)'}`}
      bdrs={rem(32)}
      display="flex"
      miw={0}
      style={{ flexDirection: 'column' }}>
      <Flex
        component="span"
        w="100%"
        direction="column"
        justify="space-between"
        p={rem(18)}
        bdrs={rem(26)}
        style={{
          aspectRatio: '1.6',
          background: `radial-gradient(ellipse at top left, ${isOnAirProject ? 'rgba(184, 74, 63, 0.34)' : 'rgba(216, 208, 198, 0.18)'}, transparent 65%), linear-gradient(145deg, #211c19, #080706)`,
        }}>
        <Badge
          color={isOnAirProject ? '#f1b5aa' : 'dark.6'}
          variant={isOnAirProject ? 'filled' : 'outline'}
          c={isOnAirProject ? 'dark.0' : 'dark.6'}
          size="lg"
          radius="xl"
          leftSection={isOnAirProject ? <Box component="span" w={7} h={7} bg="brand.5" bdrs="50%" /> : undefined}
          style={{ letterSpacing: '0.12em', borderColor: 'rgba(216, 208, 198, 0.12)' }}>
          {isOnAirProject ? 'ON AIR' : project.status.toUpperCase()}
        </Badge>
        <Flex component="span" align="flex-end" gap={rem(16)} mt={rem(60)}>
          <Text component="span" fz={rem(13)} fw={600} c="dark.5" lts="0.16em" lh={1.5}>
            {project.category}
          </Text>
          <Box component="span" h={1} bg="dark.3" mb={rem(4)} style={{ flex: 1, minWidth: rem(24) }} />
        </Flex>
      </Flex>
      <Flex component="span" direction="column" flex={1} w="100%" px={rem(4)} pt={rem(24)} gap={rem(18)}>
        <Text component="span" fz={rem(13)} c="dark.4" lts="0.16em" lh={1.5} tt="uppercase">
          {project.stack.join(' · ')}
        </Text>
        <Text component="span" fz={rem(26)} fw={700} c="dark.7" lh={1.2} style={{ overflowWrap: 'anywhere' }}>
          {project.title}
        </Text>
        <Text component="span" fz={rem(18)} c="dark.5" lh={1.7} mb={rem(10)}>
          {project.description}
        </Text>
        <Flex
          component="span"
          justify="space-between"
          align="center"
          gap={rem(16)}
          mt="auto"
          pt={rem(20)}
          pb={rem(4)}
          style={{ borderTop: '1px solid var(--mantine-color-dark-2)' }}>
          <Text component="span" fz={rem(14)} fw={600} c="dark.6" lh={1.5}>
            {project.result}
          </Text>
          <Text component="span" fz={rem(15)} fw={600} c="#f1b5aa" style={{ whiteSpace: 'nowrap' }}>
            Details ↗
          </Text>
        </Flex>
      </Flex>
    </UnstyledButton>
  );
});
