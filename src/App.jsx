import { useState } from "react";
// *********************************************************
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
    // {
    //   title: "JavaScript",
    //   url: "javascript.com",
    //   author: "Wasim, Athar",
    //   num_comments: 44,
    //   points: 5,
    //   objectID: 3,
    // },
  ];

  const [searchTerm, setSearchTerm] = useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      {/* <List list={stories} /> */}
      <List list={searchStories} />
      <hr />
    </div>
  );
};
export default App;

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={props.search}
        onChange={props.onSearch}
      />
      <p>{/* Searching for: <strong>{props.shows}</strong> */}</p>
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
