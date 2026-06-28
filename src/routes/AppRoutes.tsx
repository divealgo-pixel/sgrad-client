import { Routes, Route } from 'react-router-dom';
import CustomerSrchPage from '../pages/customer/CustomerSrchPage';
import NewCustomer from '../pages/customer/NewCustomer';
import MoiEntryPage from '../pages/moi/MoiEntryPage';
import DashBoard from '../pages/dashboard/DashBoard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/crmsrch" element={<CustomerSrchPage />} />
      <Route path="/newcli" element={<NewCustomer />} />
      <Route path="/moi" element={<MoiEntryPage />} />
    </Routes>
  );
}
