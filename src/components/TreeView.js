import React from 'react';

function TreeView({ items }) {
  function branchSearch(parentID) {
    return items.filter((item) => item.parentID == parentID);
  }
  function branchRender(parentID) {
    return (
      <div className="treeview_wrapper">
        <ul>
          {branchSearch(parentID).map((item) => (
            <li key={item.text}>
              <div key={item.id}>{item.text}</div>
              {branchRender(item.id)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>{branchRender('null')}</div>;
}

export default TreeView;
