import ReactDOM from "react-dom";
import { Component } from "react";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor() {
    super();
    this.element = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.element);
  };

  componentWillUnmount = () => {
    portalRoot.appendChild(this.element);
  };
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.element);
  }
}
