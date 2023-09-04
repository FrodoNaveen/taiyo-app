import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Contact from './components/Contact';
import Chart from './components/Chart';
import ContactPage from './components/ContactPage';
import CreateContact from './components/CreateContact';
import EditContactPage from './components/EditContactPage';


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Contact />}></Route>
        <Route path="/*" element={<Contact />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="/createcontact" element={<CreateContact />}></Route>
        <Route path="/editcontact" element={<EditContactPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
