import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductList.module.css';

const ProductList = ({ products }) => (
  <div className={classes.wrapper}>
    <table className={classes.table}>
      <thead>
        <tr className={classes.head_tr}>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ name, result }) => (
          <tr key={name}>
            <td className={classes.body_td}>{name}</td>
            <td className={classes.body_td}>{result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
