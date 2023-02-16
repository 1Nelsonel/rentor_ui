import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Analytics, Dashboard, FileManager, Users, Messaes, Saved, Settings, Orders, ErrorPage } from './pages'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Users/" element={<Users />} />
          <Route path="/Messaes/" element={<Messaes />} />
          <Route path="/Analytics/" element={<Analytics />} />
          <Route path="/FileManager/" element={<FileManager />} />
          <Route path="/Orders/" element={<Orders />} />
          <Route path="/Saved/" element={<Saved />} />
          <Route path="/Settings/" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
