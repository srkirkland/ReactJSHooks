import React, { Component } from 'react';

// 3. Class with state and validation
export default class Old extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.first + '@gmail.com',
      eid: '',
      eidValid: true,
      lastUpdatedEmail: new Date(),
      secondsElapsed: 0,
      runTimer: true
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      if (this.state.runTimer) {
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  componentWillUpdate(props, state) {
    // check if email has updated
    if (state.email !== this.state.email) {
      this.setState({ lastUpdatedEmail: new Date() });
    }
  }

  handlePause = () => {
      this.setState({ runTimer: !this.state.runTimer });
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleEIDChange = e => {
    // custom logic to validate e.  no 9's!
    const eid = e.target.value;

    if (eid.includes('9')) {
      this.setState({ eidValid: false });
    } else {
      this.setState({ eidValid: true, eid });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <input value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="row">
          <div>
            <input
              placeholder="EID"
              value={this.state.eid}
              onChange={this.handleEIDChange}
            />
            <br />
            {!this.state.eidValid && (
              <p class="form-text alert-danger">Hey stop pressing 9!</p>
            )}
          </div>
        </div>
        <div className="row">
          <h2>
            {this.props.first} {this.props.last} ({this.state.email}) #
            {this.state.eid}
          </h2>
        </div>
        <div className="row">
          <div>
            <h3>
              Email Last Updated:{' '}
              {this.state.lastUpdatedEmail.toLocaleTimeString()}
            </h3>
          </div>
        </div>
        <div className="row">
          <div>
            <h3>
              Elapsed time {this.state.secondsElapsed}
            </h3>
            <div>
                <button className="btn btn-primary" onClick={this.handlePause}>Pause Me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
