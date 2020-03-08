import React from 'react';

export class Finder extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       keyword: "",
       price: "2",
       radius: "10"
    };
  }
  
  updateKeyword = (event) => {
    this.setState({keyword: event.target.value});
  }

  updatePrice = (event) => {
    this.setState({price: event.target.value});
  }
  
  updateRadius = (event) => {
    this.setState({radius: event.target.value});
  }

  /* async */ submit = (event) => {
    // send API call and show map stuff
    //await fetch();  
    alert(`keyword: ${this.state.keyword}\nprice: ${this.state.price}\nradius: ${this.state.radius} meters`);
    event.preventDefault();
  }

  render() {
    const {keyword, price, radius} = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
            {/* keyword field */}
            <div class="form-group">
              <label for="keyword">Keyword:</label><br/>
              <input id="keyword" type="text" class="form-control" value={keyword} onChange={this.updateKeyword}/>
              <br/>
            </div>
          
            {/* price field: in Yelp API prices are 1,2,3,4 */}
            <p>Price:</p>
            <div class="custom-control custom-radio">
              <input id="super" type="radio" name="price" value="4" class="custom-control-input" checked={price === "4"} onChange={this.updatePrice}/>
              <label for="super" class="custom-control-label">$$$$</label><br/>
            </div>
            <div class="custom-control custom-radio">
              <input id="high" type="radio" name="price" value="3" class="custom-control-input" checked={price === "3"} onChange={this.updatePrice}/>
              <label for="high" class="custom-control-label">$$$</label><br/>
            </div>
            <div class="custom-control custom-radio">
              <input id="mid" type="radio" name="price" value="2" class="custom-control-input" checked={price === "2"} onChange={this.updatePrice}/>
              <label for="mid" class="custom-control-label">$$</label><br/>
            </div>
            <div class="custom-control custom-radio">
              <input id="low" type="radio" name="price" value="1" class="custom-control-input" checked={price === "1"} onChange={this.updatePrice}/>
              <label for="low" class="custom-control-label">$</label><br/><br/>
            </div>
          
            {/* radius field, in meters */}
            <div class="form-group">
              <label for="radius">Radius (meters):</label>
              <input id="radius" type="number" class="form-control" value={radius} onChange={this.updateRadius}/>
              <br />
            </div>
            <button class="btn btn-primary">Search</button>
          </form>
      </div>
  );
  }
}

export default Finder;
