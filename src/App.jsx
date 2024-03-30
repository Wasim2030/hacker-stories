const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      {/* {list.map((l) => {
        return <h1>{l.author}</h1>;
      })} */}

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <hr />

      <ul>
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
                <p>{item.author}</p>
                <p>{item.num_comments}</p>
                <p>{item.points}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
