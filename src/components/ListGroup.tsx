import * as React from 'react';

function ListGroup() {
  let items = ['London', 'San Fransico', 'Los Angeles', 'France', 'Paris'];

  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Items Found</p>}
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? 'list-group-item active' : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(i);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
