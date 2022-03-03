import React, {FC} from 'react';
import './styles/sass/style.scss'
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import AppRoutes from "./router/AppRoutes";

const App: FC = () => {
  return (
    <div className="wrapper _container">
        <Header/>
          <div className="page">
              <AppRoutes/>
          </div>
        <Footer/>
    </div>
  );
}

export default App;
