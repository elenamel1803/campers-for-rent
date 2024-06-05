import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Navbar from 'components/Navbar/Navbar';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
