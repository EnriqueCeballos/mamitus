import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="wrapper">
            <div className="window">
              <button onClick={toggle} className="closeBtn">
                X
              </button>
              <div>{children}</div>
            </div>
            <div className="backgroundModal" onClick={toggle}></div>
          </div>
        )}
      </Portal>
    );
  }
}
