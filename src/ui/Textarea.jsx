import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

function Textarea({ initialValue, onChange }) {
  const editorRef = useRef(null);

  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey="7yy7asxkcrkecr6oq6lwqqxz84nm6uo7b8gxpijvew801moe"
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
      id="description"
      initialValue={initialValue}
      onChange={() => onChange(editorRef.current.getContent())}
    />
  );
}

export default Textarea;
