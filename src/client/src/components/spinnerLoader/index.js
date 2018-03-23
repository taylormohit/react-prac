import React from 'react';
import _ from 'lodash';
import './spinnerLoader.css';
import spinner from './Spinner.svg';

class SpinnerLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkVisibility);
    window.addEventListener("scroll", this.checkVisibility);
    this.checkVisibility();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
    window.removeEventListener("resize", this.checkVisibility);
  }

  checkVisibility = () => {
    if (this.spinnerElement) {
      let rect = this.spinnerElement.getBoundingClientRect();
      this.setState({
        isVisible: rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      });
    }
  };

  render() {
    const {isVisible} = this.state;
    const {className, style} = this.props;
    const wrapperStyle = _.assign({}, {width: "16px", height: "16px"}, style);
    return (
      <div ref={me => this.spinnerElement = me} >
        {isVisible && <div className={"col-lg-12 ml-auto p-5 hide"}>
          <div className="row top-title-block align-items-center mb-4">
            <div className={`spinner-rolling spinner-loading spinner-image-position ${className}`} style={wrapperStyle}><img src={spinner}/></div></div></div>}
      </div>
    );
  }
}

export default SpinnerLoader;
