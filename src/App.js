import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
		<AllCategories/>
   	<Clothes/>
		<Cart/>
	
    </div>
  );
}

export default App;
