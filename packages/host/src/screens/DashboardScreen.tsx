import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../../../shared/components/ErrorBoundary';
import Placeholder from '../../../shared/components/Placeholder';

const Dashboard = React.lazy(() =>
  Federated.importModule('dashboard', './App'),
);

const DashboardScreen = () => {
  return (
    <ErrorBoundary name="DashboardScreen">
      <React.Suspense
        fallback={<Placeholder label="Dashboard" icon="view-dashboard" />}>
        <Dashboard />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default DashboardScreen;
