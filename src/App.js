import MyList from './components/MyList';
import './App.css';

function App() {
  const todos = [
    'Stuff',
    'More stuff',
    'Even more stuff',
    'Omg more and more stuff why!?'
  ]
  return (
    <div className="App">
      <MyList theList={todos} />
    </div>
  );
}

export default App;
