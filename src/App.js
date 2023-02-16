import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [products, setProducts] = useState([]);

const total = useMemo(() => {
  const result = products.reduce((acc, ele) => {
    console.log('Tính toán lại ...');
    return acc + ele.price;
  }, 0);
  return result;
}, [products]);

  const onAddProduct = () => setProducts([...products, {name, price: Number(price)}]);
  return (
    <div className="App">
      <input placeholder='Enter name ...' value={name} onChange = {
        e => setName(e.target.value)
      }> 
      </input>
      <br />
      <input placeholder='Enter price...' value = {price} onChange = 
      {
        e => setPrice(e.target.value)
      }></input>

      <div onClick={onAddProduct}>Add product</div>
      <div>Total: {total}</div>
      <ul>
        {products.map((e, i) => <li key = {i}>{e.name} - {e.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
