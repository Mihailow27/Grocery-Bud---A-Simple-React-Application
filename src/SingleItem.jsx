import PropTypes from "prop-types"; // Import prop-types library

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

// Define the prop types for the item, removeItem, and editItem props
SingleItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default SingleItem;
