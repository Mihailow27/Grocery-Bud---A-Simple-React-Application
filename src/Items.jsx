import PropTypes from "prop-types"; // Import prop-types library
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

// Define the prop types for the items, removeItem, and editItem props
Items.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default Items;
