import { Outlet } from 'react-router-dom';
import Header from '../common/header';
import Sidebar from '../common/sidebar';

const AdminLayout = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <main>
        <div className="page-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
