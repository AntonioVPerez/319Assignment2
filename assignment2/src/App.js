import './styles/App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductData } from './reducers/productDataSlice';
import Browse from './Browse';
import Cart from './Cart';
import Confirmation from './Confirmation';

function App() {
    const dispatch = useDispatch();
    const view = useSelector((state) => (state.view.value));

    const fetchData = async () => {
        let response = await (
            await fetch("data.json")
        ).json();
        response.forEach((product) => {
            product["quantity"] = 0;
        });
        dispatch(setProductData((response)));
    };

    useEffect(() => {
        fetchData();
    }, []);
  
    return (
      <div class="App">
        {view === 0 ? 
            <Browse/> : 
        view === 1 ? 
            <Cart/> : 
            <Confirmation/> 
        }
      </div>
    );
}

export default App;