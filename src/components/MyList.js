import React from 'react';
import ListItem from './ListItem';

function MyList(props) {
  // code goes inside of div
  let todoItems = props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });

  // addItem
  // clearlist
  // handleChange
  // renderTodos
  //add a form inside of the return statement ->
  
  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        {todoItems}
      </ul>
    </div>
  );
}

export default MyList;