import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store/store";
import { ThemeProvider } from "@/components/ThemeProvider";

// Create App component
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Enclose the Router with Provider so, all the components can access the global state values */}
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

// Export App component
export default App;