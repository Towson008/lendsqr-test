import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Login from "./pages/Login"
import Userdetails from "./pages/Userdetails";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";


function App() {
  return (    
   <Router>
        
         <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/userdetails" element={<Userdetails />}/>
          <Route path="/notfound" element={<NotFound />}/>
          <Route path="/*" element={<NotFound />}/>
         </Routes>
   </Router>
  );
}

export default App;
