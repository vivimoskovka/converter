import React from 'react'
import classes from './ProductList.module.css'
import {Quantity} from '../Quantity/Quantity'

export const ProductList = (props) => {
    return (
        <div className={classes.wrapper}>
            <table className={classes.table}>
                <thead className={classes.thead}>
                    <tr className={classes.head_tr}>
                        <th>Product</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody className={classes.tbody}>
                    {props.products.map(({ name, quantity, result}, i) => (
                            <tr className={classes.body_tr} key={i}>
                                <td className={classes.body_td}>{name}</td>
                                <td className={classes.body_td}>{result}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}