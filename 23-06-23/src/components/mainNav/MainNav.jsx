import { memo } from "react";
import "./index.scss";

const MainNav = ({ setActualContent }) => {
  const links = [
    {
      id: 1,
      name: "Home",
      text: "home",
      image: "https://img.icons8.com/?size=512&id=UEFsnIx21N69&format=png",
    },
    {
      id: 2,
      name: "Categories",
      text: "categories",
      image: "https://img.icons8.com/?size=512&id=3686&format=png",
    },
    {
      id: 3,
      name: "Favorite",
      text: "favorite",
      image: "https://img.icons8.com/?size=512&id=16076&format=png",
    },
    {
      id: 4,
      name: "More",
      text: "more",
      image: "https://img.icons8.com/?size=512&id=37924&format=png",
    },
  ];

  const onHandleClick = (categoryRender) => {
    setActualContent(categoryRender);
  };

  return (
    <div className="MainNav">
      <ul className="MainNav__list">
        {links.map((link) => (
          <li
            className="MainNav__list--item"
            key={link.id}
            onClick={() => onHandleClick(link.text)}
          >
            <img src={link.image} alt={link.name} />
            <p>{link.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(MainNav);
