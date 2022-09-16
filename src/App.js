import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainLayout />}
      />
     
    </Routes>
  );
}

export default App;
