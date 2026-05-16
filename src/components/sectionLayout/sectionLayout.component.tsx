import { Box, BoxComponentProps } from '@mantine/core';
import { memo, ReactNode } from 'react';

type ISectionLayout = {
  isContentCentered?: boolean;
  children: ReactNode;
} & BoxComponentProps;

export const SectionLayout = memo<ISectionLayout>(({ isContentCentered, children, ...rest }) => {
  return (
    <Box
      w="100%"
      mih="100vh"
      display="flex"
      style={isContentCentered ? { justifyContent: 'center', alignItems: 'center' } : {}}
      {...rest}>
      {children}
    </Box>
  );
});
