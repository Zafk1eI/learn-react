import './App.css';

function App() {
  const users = [
    {id:1, name: 'user1', surn: 'surn1', age: 30 },
    {id:2, name: 'user2', surn: 'surn2', age: 31 },
    {id:3, name: 'user3', surn: 'surn3', age: 32 },
  ];

  const res = users.map(function (item, index) {
    return <li key={index}>
      <span>{item.name}</span>:
      <span>{item.surn}</span>:
      <span>{item.age}</span>
    </li>;
  });

  return <ul>
    {res}
  </ul>;
}

export default App;
