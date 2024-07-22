import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from './productsData'

const App = () => {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
