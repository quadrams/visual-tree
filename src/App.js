import './App.css';
import { createContext, useState } from 'react';
import TreeView from './components/TreeView';
import TextArea from './components/TextArea';

export const ItemContext = createContext();

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <ItemContext.Provider value={{ items, setItems }}>
        <TextArea />
        <TreeView items={items} />
      </ItemContext.Provider>
    </div>
  );
}

export default App;
