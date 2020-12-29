class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "kielbasa",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="password"></input>
        <input type="submit"></input>
      </form>
    );

    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("root"));
