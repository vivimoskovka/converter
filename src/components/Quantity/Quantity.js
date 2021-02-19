import React, { useState, useEffect } from 'react'
import classes from './Quantity.module.css'
import {ProductList} from "../ProductList/ProductList";

const recalculate = (d1, d2) => {
    let num1 = d1 * d1
    let num2 = d2 * d2
    let result = num2 / num1
    return result
}

const newProductInitial = {
    name: null,
    quantity: null,
    result: null
};

export const Quantity = () => {
    const [fromDiameter, setFromDiameter] = useState()
    const [toDiameter, setToDiameter] = useState()
    const [newProduct, setNewProduct] = useState(newProductInitial);
    const [diameterResult, setDiameterResult] = useState(0);
    const [products, setProducts] = useState([])

const addClickHandler = () => {
        if (newProduct.name && newProduct.quantity) {
            setProducts(products => ([...products, newProduct]));
            setNewProduct(newProductInitial);

        }
}

useEffect(() => {

    let newQuantity = recalculate(fromDiameter, toDiameter, newProduct.quantity)
    if (fromDiameter>0  && toDiameter>0 && newProduct.quantity>0) {
        setDiameterResult((newProduct.quantity * newQuantity).toFixed())
        setNewProduct(product => ({ ...product, result: diameterResult }))


    } else {
        setDiameterResult('')
    }
}, [fromDiameter, toDiameter, newProduct])
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.header}>Diameter Converter</h1>
            <div className={classes.diameter}>
                <div className={classes.diam_flex}>
                    <input className={classes.input}
                           type="number"
                           min="0"
                           placeholder='From...'
                           onChange={e => setFromDiameter(e.target.value)}
                    >
                    </input>
                    <p className={classes.text}>cm</p>
                </div>
                <div className={classes.diam_flex}>
                    <input className={classes.input}
                           type="number"
                           min="0"
                           placeholder='To...'
                           onChange={e => setToDiameter(e.target.value)}
                    >
                    </input>
                    <p className={classes.text}>cm</p>
                </div>
            </div>
            <form>
                <div className={classes.product}>
                    <div className={classes.proflex}>
                        <p className={classes.text}>Please, enter product name:</p>
                        <input className={classes.input}
                               onChange={e => setNewProduct(product => ({ ...product, name: e.target.value }))}
                        />
                    </div>
                    <div className={classes.proflex}>
                        <p className={classes.text}>and quantity:</p>
                        <input className={classes.input}
                               type="number"
                               min="0"

                               onChange={e => setNewProduct(product => ({ ...product, quantity: e.target.value }))}
                        />
                    </div>
                </div>
                <p className={classes.result}>{diameterResult}</p>
                <button type="reset" className={classes.button} onClick={addClickHandler}>Add to List</button>
            </form>
            <ProductList products={products} result={diameterResult}/>
        </div>
    )
}