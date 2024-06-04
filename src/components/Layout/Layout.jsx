import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Navbar from 'components/Navbar/Navbar';
import { Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
