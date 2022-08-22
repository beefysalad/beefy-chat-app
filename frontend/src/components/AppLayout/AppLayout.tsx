import { Container } from '@chakra-ui/react';

interface AppLayoutProps {
  children: React.ReactNode;
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  return <Container>{children}</Container>;
};
