import React from 'react';
import Input from './components/input';
import Table from './components/table';
import './App.scss';
import Spinner from './components/spinner/Spinner';

const withCovidData = WrappedComponent => class extends React.Component {
  state = {
    data: [],
    isLoading: false,
    hasError: false,
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        this.setState({
          data: data.Countries,
          isLoading: false,
        })
      }, 5000);
    })
    .catch((e) => {
      this.setState({
        hasError: true,
      });
      console.error(e);
    });
  }
  
  render() {
    const { data, isLoading, hasError } = this.state; 

    return (
      <WrappedComponent {...this.props} data={data} isLoading={isLoading} hasError={hasError}/>
    )
  }
}

const InputRef = React.forwardRef(Input);

class App extends React.Component {
  inputRef = React.createRef(null);

  state = {
    value: '',
  }

  componentDidUpdate() {
    const { isLoading } = this.props;

    if (!isLoading) {
      this.inputRef.current.focus();
    }
  }

  setValue(e) {
    const { value } = e.target;

    this.setState({
      value: value,
    });
  }

  render() {
    const { data, isLoading } = this.props;
    const { value } = this.state;

    let result = data;
    
    if (value) {
      const regex = new RegExp('^' + value.toLowerCase());
      result = result.filter((c) => c.Country.toLowerCase().search(regex) + 1);
    }

    return (
      <div className="app">
        <div className="app-search">
          <InputRef className="app-input input" ref={this.inputRef} type="text" placeholder="Find country" onChange={this.setValue.bind(this)} />
        </div>
        <Table className="app-table" data={result} />
        <Spinner hidden={!isLoading}/>
      </div>
    )
  }
}

export default withCovidData(App);
