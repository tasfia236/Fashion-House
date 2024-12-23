import PropTypes from 'prop-types';
import React from 'react'

export default function ProductCard({ product }) {
  const { productName } = product;
  return (
    <div>
      <ul>
        <li className="border-4 p-4">{productName}</li>
      </ul>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
}