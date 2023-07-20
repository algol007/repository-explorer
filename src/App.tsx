import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/*' element={<NotFoundPage />} /> */}
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
