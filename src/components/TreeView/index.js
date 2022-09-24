import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import styles from './TreeView.module.scss';

function TreeView({ items }) {
  function branchSearch(parentID) {
    return items.filter((item) => item.parentID == parentID);
  }
  function branchRender(parentID) {
    return (
      <div className={styles.textview_wrapper}>
        <ul>
          {branchSearch(parentID).map((item) => (
            <div className={styles.treeElement}>
              <div className={styles.verticalLine}></div>
              <li key={item.text}>
                <div key={item.id}>{item.text}</div>
                {branchRender(item.id)}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
  return <div>{branchRender('null')}</div>;
}

export default TreeView;
