import Chip from "../Chip";

const Tags = ({ data }) => {
  return (
    <div className="com_tags_container">
      {data.map((i) => (
        <Chip
          key={i.id}
          text={`#${i.name.toUpperCase()}`}
        />
      ))}
    </div>
  );
};

export default Tags;
