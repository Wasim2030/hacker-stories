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
  console.log("🚀 ~ App ~ App:");
  return (
    <div>
      <h1>Hello World</h1>
      <SearchComponent />
      <hr />
      <List list={stories} />
      <hr />
      <Search />
    </div>
  );
};

export default App;

const List = (props) => {
  console.log("🚀 ~ list ~ list:");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  console.log("🚀 ~ Item ~ Item:");

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

// const SearchComponent = () => {
//   const [a, seta] = useState("");
//   const handleChange = (event) => {
//     // synthetic event
//     // console.log(event);
//     // value of target (here: input html element)
//     // console.log(event.target.value);
//     let val = event.target.value;
//     // console.log(val);
//     // return val;
//     seta(val);
//   };

//   return (
//     <>
//       <label htmlFor="search">Search: </label>
//       <input type="text" id="search" onChange={handleChange} />
//       <h1>{a}</h1>
//     </>
//   );
// };

const SearchComponent = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  console.log("🚀 ~ SearchComponent ~ SearchComponent:");

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </>
  );
};

const Search = () => {
  /*
  // Doesnot word this way

  let searchTerm = "";
  const handleChange = (event) => {
    searchTerm = event.target.value;
    console.log(searchTerm);
  };
  */

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log("🚀 ~ Search ~ Search:");

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
