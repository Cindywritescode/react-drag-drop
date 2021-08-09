import './App.css';
import { DragItem } from './components/DragItem';
import { DropBox } from './components/DropBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Drag the item into the box</h2>
          <DragItem name={'Item 1'}/>
          <DragItem name={'Item 2'}/>
          <br/>
        </div>
      </header>
      <DropBox/>
    </div>
  )
    ;
}

export default App;
