import './App.css';
import Frontpage from './components/Frontpage';
import Instructions from './components/Instructions';
import Quizpage from './components/Quizpage';
import Answers from './components/Answers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
     <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Frontpage} />
         <Route path='/instructions' exact component={Instructions} />
         <Route path='/quizpage' exact component={Quizpage} />
         <Route path='/answers' exact component={Answers} />
       </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;