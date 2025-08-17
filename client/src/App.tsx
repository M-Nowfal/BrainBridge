import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store/store";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * Root application component.
 *
 * - Wraps the application with `ThemeProvider` to enable theme management (light/dark mode).
 * - Provides the Redux store to the entire app using `Provider`.
 * - Renders the main `Router` component which manages all routes.
 */
const App = () => {
  return (
    // Theme provider to persist and manage theme preference (default: dark).
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      {/*
        Redux Provider:
        - Makes the Redux store available to all components within the app.
        - Ensures global state is accessible via hooks like `useAppSelector` and `useAppDispatch`.
      */}
      <Provider store={store}>
        {/* Handles navigation and route rendering */}
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

// Export App component as the root entry point
export default App;
