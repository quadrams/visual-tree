import React, { useContext, useEffect } from 'react';
import { ItemContext } from '../App';
import '../css/TextArea.css';

function TextArea() {
  const { items, setItems } = useContext(ItemContext);
  let textAreaRef = React.useRef();
  function parseTextArea() {
    let arr = textAreaRef.current.value.split(';').map((str) => str.split(`,`));
    let res = [];
    arr.map((item) => {
      let id, parentID, text;
      id = item[0];
      parentID = item[1];
      text = item[2];
      res.push({ id, parentID, text });
    });
    setItems(res);
    console.log(arr);
    console.log(res);
  }

  useEffect(() => {
    parseTextArea();
  }, []);
  return (
    <div className="textarea_wrapper">
      <textarea ref={textAreaRef} className="textarea_input">
        0,null,Root element;1,0,1 element;2,0,2 element;3,0,3 element;4,1,4 element;5,1,5
        element;6,2,6 element;7,2,7 element;8,2,8 element;9,3,9 element;10,3,10 element;11,3,11
        element;12,10,12 element
      </textarea>
      <button
        className="textarea_button"
        onClick={() => {
          parseTextArea();
        }}>
        Обновить дерево
      </button>
    </div>
  );
}

export default TextArea;
