import { Flex, FlexProps } from '@mantine/core';
import { memo, ReactNode } from 'react';

type ISectionLayout = {
  isContentCentered?: boolean;
  children: ReactNode;
} & FlexProps;

export const SectionLayout = memo<ISectionLayout>(({ isContentCentered, children, ...rest }) => {
  return (
    <Flex
      w="100%"
      mih="100vh"
      style={isContentCentered ? { justifyContent: 'center', alignItems: 'center' } : {}}
      {...rest}>
      {children}
    </Flex>
  );
});
