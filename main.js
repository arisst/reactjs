var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({

    getInitialState: function() {
      return {nama: 'State'};
    },

    componentDidMount: function() {
      var timeoutID;
      var $this = this;

      timeoutID = setTimeout(function() {
        $this.setState({nama : 'Mandriva'});
        clearTimeout(timeoutID);
      }, 3000);
    },

    handelKlik: function(e) {
      alert('Hallo '+this.state.nama);
      e.preventDefault();
    },

    render: function(){
      return (<h1>
        Hello
        <a href="#" onClick={this.props.klikHandler}>
           {this.state.nama}!
        </a>
        </h1>);
    }

});

var Header = React.createClass({
  getInitialState: function () {
    return {bc: 'gray'};
  },

  handelKlik: function(e) {
    this.setState({bc: 'red'});
    e.preventDefault();
  },

	render: function() {
		return (
			<header style={{backgroundColor:this.state.bc}}>
				<HelloMessage klikHandler={this.handelKlik} />
			</header>
		);
	}

});

ReactDOM.render(
  <Header myName="Props"/>,
  document.getElementById('main')
);
