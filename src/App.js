import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtname: '',
      txtpassword: '',
      txtDecs: '',
      sltSex: 1,
      isGoing: false,
      radio: 'fr'
    }
  }
  hadleChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit.bind(this)}>

                  <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      name='txtname'
                      className="form-control"
                      value={this.state.username}
                      onChange={this.hadleChange.bind(this)}
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="text"
                      name='txtpassword'
                      className="form-control"
                      value={this.state.password}
                      onChange={this.hadleChange.bind(this)}
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="">Description</label>

                    <textarea
                      name="txtDecs"
                      className="form-control"
                      rows="3"
                      value={this.state.txtDecs}
                      onChange={this.hadleChange.bind(this)}
                    ></textarea>

                  </div>
                  <hr />

                  <span className="label">Sex</span>

                  <select className="form-control" name="sltSex" value={this.state.sltSex} onChange={this.hadleChange.bind(this)}>
                    <option value={0}>girl</option>
                    <option value={1}>man</option>
                  </select>
                  <hr />
                  <div className="form-group">
                    <label>
                      Is going:
                     <input
                        name="isGoing"
                        type="checkbox"

                        checked={this.state.isGoing}
                        onChange={this.hadleChange.bind(this)} />
                    </label>
                  </div>
                  <hr />

                  <span className="label">Language</span>

                  <div className="radio">
                    <label>
                      <input type="radio" name="radio" value='en' checked={this.state.radio === 'en'} onChange={this.hadleChange.bind(this)} />
                      english
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="radio" value='fr' checked={this.state.radio === 'fr'} onChange={this.hadleChange.bind(this)} />
                      france
                    </label>
                  </div>


                  <button type="submit" className="btn btn-primary">Apply</button> &nbsp;

                  <button type="reset" className="btn btn-primary">delete full</button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
