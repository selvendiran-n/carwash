
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FormComponent from './components/Form/FormComponent';
import { LoginComponent } from './components/login/LoginComponent';
import { RegisterComponent } from './components/register/RegisterComponent';
import { Table } from './components/table/TableComponent';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<LoginComponent/>} > </Route>
      <Route path='/register' element={<RegisterComponent/>} > </Route>
      <Route path='/form' element={<FormComponent/>} > </Route>
      <Route path='/table' element={<Table/>} > </Route>
    </Routes>

    </BrowserRouter>

    </>

  );
}

export default App;
