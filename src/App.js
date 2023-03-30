
import { Switch } from 'react-router-dom';
import './App.css';
import CreateUser from './components/createUser';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import ViewUser from './components/viewUser';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import {data} from './data/data';
import EditUser from './components/editUser';

function App() {
  const [user, setUser] = useState(data);
  return (
    <div className="App">
       

       <Switch>

         <Route exact path = '/'>
           <Dashboard />
         </Route>

         <Route path='/profile'>
           <Profile user={user} setUser={setUser} />
         </Route>

         <Route path='/add&user'>
          <CreateUser user={user} setUser={setUser} />
         </Route>

         <Route path = '/edit/:id'>
          <EditUser user={user} setUser={setUser} />
         </Route>

         <Route path='/view/:id'>
          <ViewUser user={user} />
         </Route>

       </Switch>

    </div>
  );
}

export default App;
