import React from 'react';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from '../../shared/components/SplashScreen';
import ErrorBoundary from '../../shared/components/ErrorBoundary';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const App = () => {
  return (
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen content={"Host application is loading. Please wait..."} />}>
        <AuthProvider>
          {(authData: {isSignout: boolean; isLoading: boolean}) => {
            if (authData.isLoading) {
              return <SplashScreen content={"Host application is loading. Please wait..."} />;
            }

            if (authData.isSignout) {
              return (
                <React.Suspense fallback={<SplashScreen content={"Host application is loading. Please wait..."} />}>
                  <SignInScreen />
                </React.Suspense>
              );
            }

            return (
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
