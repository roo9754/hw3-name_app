import React from 'react';
import ReactDOM from 'react-dom';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Enter your name:</h1>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <h2>Hello {this.state.username}</h2>
    </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('app'));
