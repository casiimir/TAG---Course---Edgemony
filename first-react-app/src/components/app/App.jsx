import Hero from "../hero";
import "./index.css";

const App = () => {
  const navListItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/",
    },
    {
      id: 3,
      name: "Contacts",
      link: "/",
    },
  ];

  return (
    <div className="App">
      <ul>
        {navListItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <Hero textContent="Welcome" />
      {/* <Hero textContent="Buongiorno" /> */}
      <h1>Salve!</h1>
    </div>
  );
};

export default App;
