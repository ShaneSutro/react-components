var Pizza = () => (
  <li>Pizza</li>
);

var CheddarCheese = () => (
  <li>Cheddar Cheese</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
  }

  boldify() {
    this.setState({
      hovering: true
    });
  }

  normalize() {
    this.setState({
      hovering: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseEnter={this.boldify.bind(this)} onMouseLeave={this.normalize.bind(this)}>{this.props.food}</li>
    );
  }
};

var GroceryList = (props) => {
  return (
    <ul>
      <GroceryListItem food={props.food[0]} />
      <GroceryListItem food={props.food[1]} />
      <GroceryListItem food={props.food[2]} />
    </ul>
  );

}

ReactDOM.render(<GroceryList food={['Pizza', 'Vienna Sausages', 'Tofu']} />, document.getElementById('app'))
