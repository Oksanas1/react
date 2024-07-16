import React, { Component } from 'react';

export default class Dimensions extends Component {
  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;

    this.state = {
      heigth: innerHeight,
      width: innerWidth,
    };
    document.title = `${innerWidth}px - ${innerHeight}px`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { innerWidth, innerHeight } = window;

    this.setState({
      heigth: innerHeight,
      width: innerWidth,
    });

    document.title = `${innerWidth}px - ${innerHeight}px`;
  }

  render() {
    return (<div className="dimensions">{this.state.width}px - {this.state.heigth}px</div>);
  }
}
