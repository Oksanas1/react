import React, { Component } from 'react';
import Spinner from './Spinner';

export const withDataLoader = (url) => (WrappedComponent) => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
    };

    componentDidMount() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data, isLoading: false });
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          this.setState({ isLoading: false });
        });
    }

    render() {
      const { data, isLoading } = this.state;

      if (isLoading) {
        return <Spinner />;
      }

      return <WrappedComponent data={data} {...this.props} />;
    }
  }
};