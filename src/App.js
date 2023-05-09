import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import QuestionList from './component/QuestionList';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
           <Route exact path='/List' element={<QuestionList />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
