import "./App.css";
import React from "react";
import DogCard from "./components/DogCard";

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data: [],
    };

    this.submitQuery = this.submitQuery.bind(this);
    this.displayQuery = this.displayQuery.bind(this);
  }

  async hot_callAPI(breedName) {
    const hot_opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "6b74986d-b833-4e61-b172-ba23c9802406",
      },
    };

    const hot_response = await fetch(
      "https://api.thedogapi.com/v1/breeds/",
      hot_opts
    );

    if (!hot_response.ok) throw new Error(hot_response.status);

    const hot_json = await hot_response.json();

    const hot_rand = parseInt(Math.random() * hot_json.length);
    const hot_img = hot_json[hot_rand].image.url;
    this.setState({ hotimg: [...this.state.data, hot_json[hot_rand]] });
    console.log(hot_img);
  }

  submitQuery(event) {
    // Something else
    event.preventDefault();
    this.hot_callAPI(this.state.searchQuery);
    // clear out input

  }

  displayQuery(event) {
    // display input from search bar
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
            value={this.state.searchQuery_hot_s_p_}
            onChange={this.artistsconk}
          />

        </label>
        &nbsp;
        <input type="submit" style={{cursor: "pointer"}} value="Go!" />
      </form>
    );
  }
  render() {
    const displayDogs = this.state.data.map((cur) => {
      return <DogCard imageURL={cur.image.url} />;
    });
    return (
      <div className="Homepage">
        {this.renderHeader()}
        {this.renderSearchBar()}
      </div>
    );
  }

}

export default Homepage;
