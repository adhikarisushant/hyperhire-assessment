const Actions = ({ data }) => {
    return (
        <div className="p_action_btns_container">
        {data.map((i) => (
          <div
            key={i.id}
            className="com_action_btns_item"
            onClick={i.onClick}
          >
            <img src={i.icon} />
            {i.counter && (
              <span className="com_action_btns_counter">{i.counter}</span>
            )}
          </div>
        ))}
      </div>
    );
};

export default Actions;