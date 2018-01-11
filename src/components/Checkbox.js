import React from 'react';

class CheckBox extends React.Component{
    constructor(props) {
      super(props);
      const condition = this.props.isChecked ? this.props.isChecked : false;
      this.state = {isChecked: condition}; 
    }
  
    handleChecked = () => {
      this.setState({isChecked: !this.state.isChecked});
      this.props.onClick(this.state.isChecked);
    }
  
    render(){  
      return (
        <input defaultChecked={this.state.isChecked} className="check-item" type="checkbox" onChange={ this.handleChecked } />
      )
    }
  }

  export default CheckBox;