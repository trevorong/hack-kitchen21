import './App.css';
import React from "react";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchQuery: "",
		};

    this.submitQuery = this.submitQuery.bind(this);
    this.displayQuery = this.displayQuery.bind(this);
	}

	submitQuery(event) {
    // Something else
    event.preventDefault();
    alert(this.state.searchQuery);

    // clear out input
    this.setState({
      searchQuery: ""
    });
  }

  displayQuery(event) {
    // get input from search bar
    this.setState({
      searchQuery: event.target.value,
    });
  }

	renderHeader() {
		const name = "Dogginator";
		return <h className="Header">{name}</h>;
	}

	renderSearchBar() {
		return (
			<form className="Search" onSubmit={this.submitQuery}>
        <label>
          <input
						className="Searchbar"
            type="text"
            placeholder="Search for doggos..."
            value={this.state.searchQuery}
            onChange={this.displayQuery}
          />
        </label>&nbsp;
        <input style={{cursor: "pointer"}} type="submit" value="Go!" />
      </form>
		);
	}

	render() {
		return(
			<div className="Homepage">
				{this.renderHeader()}
				{this.renderSearchBar()}
			</div>
		);
	}
}

export default Homepage;
