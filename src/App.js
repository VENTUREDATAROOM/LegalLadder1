
import './App.css';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import HomePage from './components/HomePage';
import DashBoardPage from './components/pages/DashBoardPage';
import DashBoardProduct from './components/DashBoardProduct';
import Home from './components/pages/Home';
import Documents from './components/pages/Documents';
import Templets from './components/pages/Templets';
import Forms from './components/pages/Forms';
import InvoiceManagement from './components/pages/InvoiceManagement';
import FileGst from './components/pages/FileGst';
import CreateProposal from './components/pages/CreateProposal';
import ESign from './components/pages/ESign';
import Contact from './components/pages/Contact';
import Reporting from './components/pages/Reporting';
import NewDocument from './components/pages/NewDocument';



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route index path='/loginpage' element={<LoginPage/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/dashboard' element={<DashBoard/>} />
            <Route path='/homepage' element={<HomePage/>}/>

            {/* nested routing in home pages under dashboardproduct outlet for rendering pages in dashboardproduct and make a index path// to dashboardproduct */}
            <Route element={<HomePage/>}>
              <Route  element={<DashBoardProduct/>} />
              <Route path='/dashboardpage' element={<DashBoardPage/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/documents' element={<Documents/>} />
              <Route path='/templets' element={<Templets/>} />
              <Route path='/forms' element={<Forms/>} />
              <Route path='/invoice' element={<InvoiceManagement/>} />
              <Route path='/filegst' element={<FileGst/>} />
              <Route path='/createproposal' element={<CreateProposal/>} />
              <Route path='/esign' element={<ESign/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/reporting' element={<Reporting/>} />
              <Route path='/newdocument' element={<NewDocument/>} />

              </Route>
          </Routes>
    </BrowserRouter>


    </>
    
  );
}

export default App;
