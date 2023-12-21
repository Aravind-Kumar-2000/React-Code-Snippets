import UseStateHook from "./Snippets/useState";
import ListAndKeys from "./Snippets/listAndKeys";
import UseRefHook from "./Snippets/useRef";
import UseEffectHook from "./Snippets/useEffect";
import API from "./Snippets/API_Fetch/API";
import EntryPoint from "./Snippets/CRUD_Operation/entry";

function App() {
  return (
    <div >
      <UseStateHook/>
      <ListAndKeys/>
      <UseRefHook/>
      <UseEffectHook/>
      <API/>
      <EntryPoint/>
    </div>
  );
}

export default App;
