import Addinfo from './components/addinfo';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Layout from './components/layout';
import Login from './components/login';
import Showmore from './components/showmore';

function App() {
  return (
    <BrowserRouter>
  
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="/register" element={<Addinfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/show/:id" element={<Showmore />} />


            {/* <Route path="/explore/:id" element={<ProtectedRoute><Explore /></ProtectedRoute>}/> */}
              {/* <Route path="/hotel/:id" element={<Hotel />} /> */}
            


          </Route>









        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
