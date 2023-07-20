class App extends React.Component {
  state = {
    person : {
      name : "Anwar Moustaghfir",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgUrl : "https://th.bing.com/th?id=OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      profession : "Newbie"
    },
    show : false,
    lastMountedTime: null,
  };

  componentDidMount() {
    this.setState({
      lastMountedTime: new Date().toLocaleTimeString(),
    });
  }

  render(){
    const { person , show, lastMountedTime } = this.state;


    return (
      <div>
        <button onClick={this.toggleShow}>Button</button>
        {
          show && ( 
            <div>
            <h1>{person.name}</h1>
            <p>{person.description}</p>
            <img src={person.imgUrl} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
          <p>Last mounted time: {lastMountedTime}</p>
      </div>
    );
  }
}

export default App;
