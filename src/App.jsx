import { useState } from "react";

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

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
      <hr />
    </div>
  );
};

export default App;

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />

      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

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
