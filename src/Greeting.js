const Greeting = (props) => {
    console.log(props);
    return (
      <div className="App">
      <h2>{props.text}g</h2>
      </div>
    );
  }

  export default Greeting;