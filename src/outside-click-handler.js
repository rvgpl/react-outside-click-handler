import React from "react";
import PropTypes from "prop-types";

class OutsideClickHandler extends React.Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = (node) => (this.wrapperRef = node);

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutsideClick();
    }
  };

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideClickHandler.propTypes = {
  children: PropTypes.node,
  onOutsideClick: PropTypes.func
};

export default OutsideClickHandler;
