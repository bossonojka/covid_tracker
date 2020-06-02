import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './tableRow';
import TableItem from './tableRow/tableItem/TableItem';
import './Table.scss';

class Table extends React.Component {
  state = {
    data: [],
    isSorted: false,
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const { data } = this.props;
      
      this.setState({
        data: data,
      });
    }
  }

  sortCountry = () => { 
    const { data, isSorted } = this.state;
    const { data: initial } = this.props;

    if (!isSorted) {
      let sorted = [...data];
      
      sorted.sort((f, s) => {
        if (f.Country < s.Country) {
          return 1;
        }

        if (f.Country > s.Country) {
          return -1;
        }

        return 0;
      });

      this.setState({
        data: sorted,
        isSorted: true,
      });

    } else {
      this.setState({
        data: initial,
        isSorted: false,
      });
    }
  }

  sortTotalDeaths = () => {
    const { data, isSorted } = this.state;
    let sorted = [...data];

    if (!isSorted) {
      sorted.sort((f, s) => s.TotalDeaths - f.TotalDeaths);

      this.setState({
        data: sorted,
        isSorted: true,
      });

    } else {
      sorted.sort((f, s) => f.TotalDeaths - s.TotalDeaths);

      this.setState({
        data: sorted,
        isSorted: false,
      });
    }
  }

  render() {
    const { data } = this.state;

    const countries = data.map((c, i) => (
      <TableRow className="table-row" key={i}>
        <TableItem className="table-item">{c.Country}</TableItem>
        <TableItem className="table-item">{c.NewConfirmed}</TableItem>
        <TableItem className="table-item">{c.NewDeaths}</TableItem>
        <TableItem className="table-item">{c.NewRecovered}</TableItem>
        <TableItem className="table-item">{c.TotalConfirmed}</TableItem>
        <TableItem className="table-item">{c.TotalDeaths}</TableItem>
        <TableItem className="table-item">{c.TotalRecovered}</TableItem>
      </TableRow>
    ));

    return (
      <table className="table">
        <thead className="table-head">
          <TableRow className="table-row">
            <TableItem className="table-item" onClick={this.sortCountry}>Country</TableItem>
            <TableItem className="table-item">New Confirmed</TableItem>
            <TableItem className="table-item">New Deaths</TableItem>
            <TableItem className="table-item">New Recovered</TableItem>
            <TableItem className="table-item">Total Confirmed</TableItem>
            <TableItem className="table-item" onClick={this.sortTotalDeaths}>Total Deaths</TableItem>
            <TableItem className="table-item">Total Recovered</TableItem>
          </TableRow>
        </thead>
        <tbody>{countries}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default Table;
