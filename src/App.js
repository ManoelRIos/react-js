import { Route } from 'react-router-dom'
import { Home } from './components/Home'

function App() {

  return (
    <Route path="/" exact component={Home}/>
  );
}

export default App;
