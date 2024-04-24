import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Header } from './header';
import { Footer } from './footer';
import { Container } from 'src/components/Container';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"
        />
      </Container>
      <Footer />
    </>
  );
};
