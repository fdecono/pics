import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) { //convention: on + Element + Event
    console.log(event.target.value);
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* We want the callback function onInputChange to be called when there's a change, not when the component is rendered, so it goes without () */}
            <input type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
