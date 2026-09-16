import { Flex, FlexProps } from '@mantine/core';
import { memo, ReactNode } from 'react';

type ISectionLayout = {
  isContentCentered?: boolean;
  isFullHeight?: boolean;
  children: ReactNode;
} & FlexProps;

export const SectionLayout = memo<ISectionLayout>(({ isContentCentered, isFullHeight = true, children, ...rest }) => {
  return (
    <Flex
      w="100%"
      mih={isFullHeight ? '100vh' : 'auto'}
      style={isContentCentered ? { justifyContent: 'center', alignItems: 'center' } : {}}
      {...rest}>
      {children}
    </Flex>
  );
});
