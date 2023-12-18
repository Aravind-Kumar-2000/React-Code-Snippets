import UseStateHook from "./Snippets/useState";
import ListAndKeys from "./Snippets/listAndKeys";
import UseRefHook from "./Snippets/useRef";
import UseEffectHook from "./Snippets/useEffect";
import API from "./Snippets/API_Fetch/API";

function App() {
  return (
    <div >
      <UseStateHook/>
      <ListAndKeys/>
      <UseRefHook/>
      <UseEffectHook/>
      <API/>
    </div>
  );
}

export default App;
