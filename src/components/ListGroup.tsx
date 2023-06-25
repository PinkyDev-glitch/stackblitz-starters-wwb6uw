import * as React from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <>
      <h1>{heading}</h1>
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
              onSelectedItem(item);
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
