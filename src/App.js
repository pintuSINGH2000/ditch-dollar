import './App.css';
import { Route, Routes } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<DashboardPage />}></Route>
  </Routes>
  );
}

export default App;
