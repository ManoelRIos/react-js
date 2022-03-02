function App() {

  function formatName(user){
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  return (
    <div className="App">
      <h1>Hello, {formatName(user)}! </h1>
    </div>
  );
}

export default App;
