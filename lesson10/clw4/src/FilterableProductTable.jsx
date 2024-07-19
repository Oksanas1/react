import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleChangeFilter = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onHandleChangeFilter={this.handleChangeFilter} />
        <ProductTable 
          products={this.props.products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  };
}

export default FilterableProductTable;