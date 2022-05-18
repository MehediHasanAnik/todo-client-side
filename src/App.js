import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ProblemSolution from './Pages/ProblemSolution/ProblemSolution';
import TodoList from './Pages/TodoList/TodoList';
import Social from './Pages/Social/Social';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/prblem" element={<ProblemSolution />}></Route>
        <Route path="/todo" element={<RequireAuth><TodoList /></RequireAuth>}></Route>
        <Route path="/social" element={<Social></Social>}></Route>
      </Routes>


    </div>
  );
}

export default App;
