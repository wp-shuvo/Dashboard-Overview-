import React from 'react';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import DashboardLayouts from '../Layouts/DashboardLayouts';
import Dashboard from '../Pages/Dashboard';
import CallLogs from '../Pages/CallLogs';
import Settings from '../Pages/Settings';
import Appointments from '../Pages/Appointments';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="w-full h-full flex justify-center mt-2.5">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'call-logs',
        element: <CallLogs />,
      },
      {
        path: 'appointments',
        element: <Appointments />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default Routes;
