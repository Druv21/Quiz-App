import './App.css';
import Frontpage from './components/Frontpage';
import Instructions from './components/Instructions';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
     <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Frontpage} />
         <Route path='/instructions' exact component={Instructions} />
         <Route path='/home' exact component={Home} />
       </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;
