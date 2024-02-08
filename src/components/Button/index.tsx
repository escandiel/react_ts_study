import React from "react";
import "./style.scss";

class Button extends React.Component<any, any> {
  render() {
    return <button className="botao">{this.props.children}</button>;
  }
}

export default Button;
