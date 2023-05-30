import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../../../shared/components/ErrorBoundary';
import Placeholder from '../../../shared/components/Placeholder';

const Account = React.lazy(() =>
  Federated.importModule('auth', './AccountScreen'),
);

const AccountScreen = () => {
  return (
    <ErrorBoundary name="AccountScreen">
      <React.Suspense fallback={<Placeholder label="Account" icon="account" />}>
        <Account />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AccountScreen;
