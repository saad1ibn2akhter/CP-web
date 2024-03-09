import { useState , useRef , ReactDOM} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from '@monaco-editor/react'
import './App.css'

function App() {
  const [fileName, setFiles] = useState("script.py");
 
  

  const files ={
    "script.py":{
      name:"script.py",
      language:"python",
      value:`# Some Example python code
      print("hello world)
      `
    }

  }
  const file = files[fileName];
  const editorRef = useRef(null);

  function handleEditorDidMount(editor , monaco){
    editorRef.current =editor;
  }

  const getEditorValue = () =>{
    alert(editorRef.current.getValue());
  }
  return (
    <>
      <div className='App'>
        <button onClick={() => getEditorValue()}>Show Result</button>
        <Editor
        height="100vh"
        width="100%"
        defaultLanguage={file.language}
        onMount={handleEditorDidMount}
        theme='vs-dark'
        defaultValue={file.value}
        path={file.name}
        />
      </div>
      
    </>
  )
}

export default App
