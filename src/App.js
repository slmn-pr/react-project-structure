import AppRouter from "./Routing/AppRouter";
import { Toaster } from "react-hot-toast";
import { AuthContext, AuthProvider } from "./context/AuthContext";

// import app dependecies like bootstrap or ...
import "./styles/global.scss";

const App = () => {
  return (
    <section>
      <Toaster />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </section>
  );
};

export default App;
