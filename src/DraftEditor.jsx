import { useEffect, useRef, useState } from "react";

function DraftEditor() {
  
  const [draft, setDraft] = useState("");

  const renderCount = useRef(0); // TODO 3:

  renderCount.current += 1; // TODO 3:

  const inputRef = useRef(null); // TODO 1:

  useEffect(() => {
    inputRef.current.focus();
  }, []);


   // TODO 2:
  useEffect(() => {
    console.log("Draft saved:", draft);
  }, [draft]);

  return (
    <div>
      <h2>Draft Editor</h2>

      <input
        ref={inputRef}
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Type your draft here..."
      />

      <p>Character count: {draft.length}</p>

      {/* TODO 4*/}
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default DraftEditor;

