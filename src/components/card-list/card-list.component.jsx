import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return (
        <Card
          key={id}
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          h2={name}
          p={email}
        />
      );
    })}
  </div>
);

export default CardList;
