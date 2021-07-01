import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import classes from './Quantity.module.css';
import ProductList from '../ProductList/ProductList';

export const recalculate = (d1, d2) => {
  const num1 = d1 * d1;
  const num2 = d2 * d2;
  return num2 / num1;
};

const newProductInitial = {
  name: null,
  quantity: null,
  result: null,
};

// const capitalize = word => word[0].toUpperCase() + word.slice(1);



const Quantity = () => {
  const [fromDiameter, setFromDiameter] = useState();
  const [toDiameter, setToDiameter] = useState();
  const [newProduct, setNewProduct] = useState(newProductInitial);
  const [diameterResult, setDiameterResult] = useState(0);
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([])


  const addClickHandler = async () => {
    if (newProduct.name && newProduct.quantity) {
      setProducts((prev) => ([...prev, newProduct]));
      console.log(products)
      setProductList()

      // setProducts((prev) => ([...prev, newProduct]));
      setNewProduct(newProductInitial);
      const db = firebase.database();
      const productListRef = db.ref('productlist').push();
      await productListRef.set({
        product: newProduct.name,
        quantity: newProduct.result,
      });
    }
  };

  useEffect(() => {
    const newQuantity = recalculate(fromDiameter, toDiameter, newProduct.quantity);
    if (fromDiameter > 0 && toDiameter > 0 && newProduct.quantity > 0) {
      setDiameterResult(Math.floor(newProduct.quantity * newQuantity));
    } else {
      setDiameterResult(0);
    }
  }, [fromDiameter, toDiameter, newProduct.quantity, setDiameterResult]);

  useEffect(() => {
    setNewProduct((product) => ({ ...product, result: diameterResult }));
  }, [diameterResult, setNewProduct]);

  useEffect( () => {
    const db = firebase.database();
    const ref = db.ref("productlist");
    ref.on('value',  (snapshot) => {
      setProducts(Object.values(snapshot.val()))
      console.log(productList)
      console.log(snapshot.val())
    })
    return () => ref.off()
  },[] )

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Diameter Converter</h1>
      <div className={classes.diameter}>
        <div className={classes.diam_flex}>
          <input
            className={classes.input}
            type="number"
            min="0"
            placeholder="From..."
            onChange={(e) => setFromDiameter(e.target.value)}
          />
          <p className={classes.text}>cm</p>
        </div>
        <div className={classes.diam_flex}>
          <input
            className={classes.input}
            type="number"
            min="0"
            placeholder="To..."
            onChange={(e) => setToDiameter(e.target.value)}
          />
          <p className={classes.text}>cm</p>
        </div>
      </div>
      <form>
        <div className={classes.product}>
          <div className={classes.proflex}>
            <p className={classes.text}>Please, enter product name:</p>
            <input
              className={classes.input}
              onChange={(e) => setNewProduct((product) => ({ ...product, name: e.target.value }))}
            />
          </div>
          <div className={classes.proflex}>
            <p className={classes.text}>and quantity:</p>
            <input
              className={classes.input}
              type="number"
              min="0"

              onChange={(e) => setNewProduct((product) => ({ ...product, quantity: e.target.value }))}
            />
          </div>
        </div>
        <p className={classes.result}>{diameterResult}</p>
        <button type="button" className={classes.button} onClick={addClickHandler}>Add to List</button>
      </form>
      <ProductList products={products} result={diameterResult} />
    </div>
  );
};

export default Quantity;