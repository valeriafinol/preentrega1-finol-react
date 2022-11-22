import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="greetingContainer">
      <p className="pGreeting">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
