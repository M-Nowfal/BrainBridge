import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store/store";
import AppToaster from "./components/AppToaster";

// App component serving as the root of the application
const App = () => {

  return (
      //Redux Provider 
      <Provider store={store}>
        <AppToaster />
        {/* Handles navigation and route rendering */}
        <Router />
      </Provider>
  );
};

// Export App component as the root entry point
export default App;
