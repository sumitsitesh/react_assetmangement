import Header from './Components/Header'
import AssetTable from './Components/AssetTable';
import ErrorComponent from './Components/ErrorComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ErrorComponent>
      <AssetTable />
      </ErrorComponent>
      
    </div>
  );
}

export default App;
