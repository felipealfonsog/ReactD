var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  // since it's an even handler it's called e 
  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    // this is an object 

    // save the file and test it out 

    alert(name);
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
        
          <input type="text" ref="name"/>
          <button>Set Name</button>

          
        </form>
      </div>
    );
  }
});

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
