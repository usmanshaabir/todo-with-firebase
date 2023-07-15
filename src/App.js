import PublicRoutes from 'Pages/PublicRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import AuthContextProvider from './Context/AuthContext';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <>
    <AuthContextProvider>
    <PublicRoutes />
    </AuthContextProvider>
    </>
  );
}

export default App;
