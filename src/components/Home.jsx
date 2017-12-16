import React, { Component } from 'react';

import TestInput from './TestInput';

class Home extends Component {
    constructor(props) {
      super(props);

      this.state = {
        inputValue: ''
      };

      this.onInputValueChange = this.onInputValueChange.bind(this);
    }

    onInputValueChange(event) {
      event.persist();

      this.setState(() => {
        return {
          inputValue: event.target.value
        };
      });
    }

    render() {
      return (
        <div>
          <h2>{this.state.inputValue}</h2>

          <TestInput 
            inputValue={this.state.inputValue}
            onInputValueChange={this.onInputValueChange}
          />
        </div>
      );
    }
};

export default Home;