import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../../../shared/components/ErrorBoundary';
import Placeholder from '../../../shared/components/Placeholder';

const Booking = React.lazy(() => Federated.importModule('booking', './App'));

const BookingScreen = () => {
  return (
    <ErrorBoundary name="BookingScreen">
      <React.Suspense
        fallback={<Placeholder label="Booking" icon="calendar" />}>
        <Booking />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default BookingScreen;
