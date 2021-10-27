import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

const initialProductList = [
  { id: 1, name: "product 1", price: 50, quantity: 1 },
  { id: 2, name: "product 2", price: 75, quantity: 2 },
  { id: 3, name: "product 3", price: 20, quantity: 5 },
];

function App() {
  //states
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [shoppingCart, addToShoppingCart] = useState(initialProductList);
  const [total, setTotal] = useState(0);

  //methods
  const handleOnSubmit = () => {
    if (!initialProductList.some((e) => e.name === name)) {
      addToShoppingCart(
        shoppingCart.concat([
          { id: "", name: name, price: price, quantity: quantity },
        ])
      );
    }
  };

  useEffect(() => {
    let sum = 0;
    shoppingCart.forEach((i) => {
      sum = sum + i.price * i.quantity;
      setTotal(sum);
    });
  }, [shoppingCart]);

  return (
    <div className="App">
      <h1>My Order</h1>
      <Table shoppingCart={shoppingCart} total={total} />
      <Form
        setName={setName}
        setPrice={setPrice}
        setQuantity={setQuantity}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default App;
