const App = () => {
  const stories = [
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

  return (
    <div>
      <h1>Hello World</h1>
      <SearchComponent />
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
        <p>{props.item.author}</p>
        <p>{props.item.num_comments}</p>
        <p>{props.item.points}</p>
      </span>
    </li>
  );
};

const SearchComponent = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input html element)
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </>
  );
};
