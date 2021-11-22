import React from "react";
import Editor from "@monaco-editor/react";
import EditorHeading from "./EditorHeading";

const Editors = (prop) => {
  const { value, lang, setValue, displayName } = prop;
  function handleEditorChange(value, event) {
    setValue(value);
  }

  return (
    <td>
      <div className="editor">
        <EditorHeading name={displayName} />
      </div>
      <div className="editor">
        <Editor
          width="100%"
          height="50vh"
          defaultLanguage={lang}
          defaultValue={value}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
    </td>
  );
};

export default Editors;
