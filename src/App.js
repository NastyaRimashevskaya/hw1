
import './App.css';
import { Surch } from './components/surch/surch';
import { Done } from './components/done/done';
import { Buttons } from './components/buttons/buttons';
import { List } from './components/list/list';
import { Add } from './components/add/add';


function App() {
  return (
    <><div className="app">
      <h1 className="main">Todo-application</h1>
    </div><Done/><Surch /><Buttons/><List/><Add/>
    </>
  );
}

export default App;
