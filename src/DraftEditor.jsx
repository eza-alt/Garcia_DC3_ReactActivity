import { useEffect, useRef, useState } from "react";

function DraftEditor() {
  
  const [text, setText] = useState("");

  // TODO 3:

  const renderCount = useRef(0);

  // TODO 3:

  renderCount.current += 1;

  // TODO 1:

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // TODO 2:
 
  useEffect(() => {
    console.log("Draft saved:", text);
  }, [text]);

  return (
    <div>
      <h2>Draft Editor</h2>

      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your draft..."
      />

      <p>Character count: {text.length}</p>

      {/* TODO 4*/}
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default DraftEditor;

