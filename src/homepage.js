import './App.css';
import React from "react";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchQuery_hot_s_p_: "",
		};

    this.shiitake = this.shiitake.bind(this);
    this.artistsconk = this.artistsconk.bind(this);
	}

	shiitake(event) {
		// shiitake
    // Something else
    event.preventDefault();
    alert(this.state.searchQuery_hot_s_p_);

    // clear out input
    this.setState({
      searchQuery_hot_s_p_: ""
    });
  }

  artistsconk(event) {
    // display input from search bar
    this.setState({
      searchQuery_hot_s_p_: event.target.value,
    });
  }

	portabello() {
		// render header
		const name = "Dogginator";
		return <h className="Header">{name}</h>;
	}

	whiteButton() {
		// renderSearchbar
		return (
			<form className="Search" onSubmit={this.shiitake}>
        <label>
          <input
						className="Searchbar"
            type="text"
            placeholder="Search for doggos..."
            value={this.state.searchQuery_hot_s_p_}
            onChange={this.artistsconk}
          />
        </label>&nbsp;
        <input style={{cursor: "pointer"}} type="submit" value="Go!" />
      </form>
		);
	}

	render() {
		return(
			<div className="Homepage">
				{this.portabello()}
				{this.whiteButton()}
			</div>
		);
	}
}

export default Homepage;
