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

        {products?.map(({ product, quantity }) => (
          <tr>
            <td className={classes.body_td}>{product}</td>
            <td className={classes.body_td}>{quantity}</td>
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
