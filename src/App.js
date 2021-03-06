import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import ExerciseList from './component/exercises-list';
import NavBar from './component/navbar';
import EditExercise from './component/edit-exercise';
import CreateExercise from './component/create-exercise';
import CreateUser from './component/create-user';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar/>
      <br/> 
      <Route exact path='/edit/:id' component={EditExercise}></Route>
      <Route exact path='/create' component={CreateExercise}></Route>
      <Route exact path='/user' component={CreateUser}></Route>
      <Route exact path='/' component={ExerciseList}></Route>
    </Router>
    
  );
}

export default App;
