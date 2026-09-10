'use client';

import { IProject } from '@/constants';
import { Badge, Box, Button, Flex, List, Modal, rem, SegmentedControl, Text } from '@mantine/core';
import { memo, ReactNode, useState } from 'react';

type IProjectDetailModal = {
  project: IProject | null;
  opened: boolean;
  onClose: () => void;
};

type IPerspective = 'dev' | 'planning';
type IProjectDetailBox = {
  label?: string;
  content: ReactNode;
};

const ProjectCaseStudy = memo<{ project: IProject }>(({ project }) => {
  const [perspective, setPerspective] = useState<IPerspective>('dev');
  return (
    <Flex direction="column" gap={rem(8)}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={rem(16)}>
        <Text fz={rem(14)} c="dark.4" lts="0.18em">
          CASE STUDY
        </Text>
        <SegmentedControl
          value={perspective}
          onChange={setPerspective}
          data={[
            {
              label: (
                <Text component="span" c={perspective === 'planning' ? 'dark.0' : 'dark.5'} fz={rem(14)} fw={600}>
                  Planning
                </Text>
              ),
              value: 'planning',
            },
            {
              label: (
                <Text component="span" c={perspective === 'dev' ? 'dark.0' : 'dark.5'} fz={rem(14)} fw={600}>
                  Dev
                </Text>
              ),
              value: 'dev',
            },
          ]}
          radius="xl"
          color="dark.7"
          bg="dark.0"
          styles={{
            root: { border: '1px solid var(--mantine-color-dark-2)' },
            label: { letterSpacing: '0.1em', lineHeight: 1.2, padding: `${rem(4)} ${rem(10)}` },
          }}
        />
      </Flex>
      <Box p={{ base: rem(18), sm: rem(24) }} bd="1px solid dark.2" bdrs={rem(24)} bg="dark.0">
        <Text fw={700} fz={rem(18)} c="dark.7" mb={rem(20)}>
          {perspective === 'dev' ? '개발 관점' : '기획 관점'}
        </Text>
        <List
          spacing={rem(12)}
          c="dark.5"
          fz={rem(16)}
          icon={<Box w={7} h={7} bg="brand.5" bdrs="50%" />}
          styles={{ item: { lineHeight: 1.7 }, itemWrapper: { alignItems: 'baseline' } }}>
          {(perspective === 'dev' ? project.dev : project.planning).map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      </Box>
    </Flex>
  );
});

const ProjectDetailBox = memo<IProjectDetailBox>(({ label, content }) => {
  return (
    <Flex direction="column" gap={rem(22)} p={rem(24)} bg="dark.1" bd="1px solid dark.2" bdrs={rem(28)}>
      {label && (
        <Text fz={rem(14)} c="dark.4" lts="0.18em">
          {label}
        </Text>
      )}
      {content}
    </Flex>
  );
});

export const ProjectDetailModal = memo<IProjectDetailModal>(({ project, opened, onClose }) => {
  const isOnAirProject = project?.status === 'onAir';
  const hasProjectUrl = project?.demoUrl || project?.githubUrl;
  return (
    <Modal.Root opened={opened} onClose={onClose} size={rem(960)} xOffset={rem(12)} yOffset={rem(20)} padding={0}>
      <Modal.Overlay backgroundOpacity={0.8} />
      <Modal.Content
        bg="dark.0"
        c="dark.7"
        radius={rem(36)}
        style={{ border: '1px solid var(--mantine-color-dark-2)', overflowWrap: 'anywhere' }}>
        {project && (
          <Modal.Body p={0}>
            <Flex
              direction="column"
              justify="space-between"
              mih={{ base: rem(260), sm: rem(380) }}
              p={{ base: rem(24), sm: rem(30) }}
              bdrs={`${rem(36)} ${rem(36)} 0 0`}
              style={{
                background: `radial-gradient(ellipse at top left, ${isOnAirProject ? 'rgba(184, 74, 63, 0.35)' : 'rgba(216, 208, 198, 0.18)'}, transparent 70%), linear-gradient(145deg, #211c19, #080706)`,
              }}>
              <Badge
                variant="light"
                color={isOnAirProject ? 'brand.5' : 'dark.5'}
                c="dark.7"
                size="lg"
                radius="xl"
                leftSection={isOnAirProject ? <Box w={9} h={9} bg="#f35b4d" bdrs="50%" /> : undefined}
                style={{ letterSpacing: '0.16em' }}>
                {isOnAirProject ? 'ON AIR' : project.status.toUpperCase()}
              </Badge>
              <Flex direction="column" gap={rem(20)} mt={rem(50)}>
                <Text c="dark.5" fz={rem(14)} fw={600} lts="0.2em">
                  {project.category}
                </Text>
                <Modal.Title fz={{ base: rem(38), sm: rem(68) }} fw={700}>
                  {project.title}
                </Modal.Title>
              </Flex>
            </Flex>

            <Flex direction="column" p={{ base: rem(24), sm: rem(38) }} gap={rem(24)}>
              <Flex justify="space-between" align="center" gap={rem(16)}>
                <Text c="brand.5" fz={rem(14)} fw={600} lts="0.22em">
                  PROJECT DETAIL
                </Text>
                <Modal.CloseButton
                  data-autofocus
                  size="lg"
                  c="dark.5"
                  radius="xl"
                  style={{ border: '1px solid var(--mantine-color-dark-2)' }}
                />
              </Flex>
              <Text fz={{ base: rem(18), sm: rem(22) }} c="dark.6" lh={1.7} mb={rem(16)}>
                {project.description}
              </Text>
              <ProjectDetailBox
                label="RESULT"
                content={
                  <Text fz={rem(20)} fw={600} c="dark.7" lh={1.5}>
                    {project.result}
                  </Text>
                }
              />
              <ProjectDetailBox
                label="STACK"
                content={
                  <Flex wrap="wrap" gap={rem(10)}>
                    {project.stack.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        color="dark.3"
                        c="dark.6"
                        radius="xl"
                        size="xl"
                        tt="none"
                        style={{ maxWidth: '100%', height: 'auto', minHeight: rem(34), cursor: 'default' }}
                        styles={{ label: { whiteSpace: 'normal' } }}>
                        {item}
                      </Badge>
                    ))}
                  </Flex>
                }
              />
              <Box p={{ base: rem(20), sm: rem(24) }} bg="dark.1" bd="1px solid dark.2" bdrs={rem(28)}>
                <ProjectCaseStudy key={`${project.id}-${opened}`} project={project} />
              </Box>
              {hasProjectUrl && (
                <Flex wrap="wrap" gap={rem(16)} mt={rem(14)}>
                  {project.demoUrl && (
                    <Button
                      component="a"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      radius="xl"
                      size="lg"
                      color="dark.7"
                      c="dark.0">
                      View Demo ↗
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      radius="xl"
                      size="lg"
                      variant="outline"
                      color="dark.3"
                      c="dark.7">
                      GitHub ↗
                    </Button>
                  )}
                </Flex>
              )}
            </Flex>
          </Modal.Body>
        )}
      </Modal.Content>
    </Modal.Root>
  );
});
