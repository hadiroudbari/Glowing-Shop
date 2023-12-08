import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

function Textarea({ value, onChange }) {
  const editorRef = useRef(null);

  onChange(editorRef?.current?.targetElm?.value);

  return (
    <Editor
      onInit={(evt, editor) => {
        editorRef.current = editor;
      }}
      id="description"
      apiKey="1lzjz4gz78piabxlh6q5ym2s14cy9rzqlq0b3gnta9ra4am1"
      initialValue="<p></p>"
      init={{
        height: 200,
        menubar: false,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | casechange blocks | bold italic backcolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
        statusbar: false,
        resize: false,
      }}
    />
  );
}

export default Textarea;
