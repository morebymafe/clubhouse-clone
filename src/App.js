import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path='/' element={ <Welcome /> } />
          <Route exact path='/invite' element={ <PhoneConfirmation /> } />
          <Route exact path='/code_confirm' element={ <CodeConfirm /> } />
          <Route exact path='/allow_notification' element={ <AllowNotification /> } />
        </Routes>

      </PlanLayout>
    
    </BrowserRouter>
   
    );
}

export default App;
