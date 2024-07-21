import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import productsData from './productsData';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleFilterTextChange = (value) => {
    this.setState({
      filterText: value,
    });
  }

  handleInStockChange = (value) => {
    this.setState({
      inStockOnly: value,
    });
  }

  render() {
    const { filterText, inStockOnly } = this.state;

    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={this.handleFilterTextChange} 
          onInStockChange={this.handleInStockChange} 
        />
        <ProductTable 
          products={productsData} 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
        />
      </div>
    );
  }
}

export default FilterableProductTable;