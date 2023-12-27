import UseStateHook from "./Snippets/useState";
import ListAndKeys from "./Snippets/listAndKeys";
import UseRefHook from "./Snippets/useRef";
import UseEffectHook from "./Snippets/useEffect";
import API from "./Snippets/API_Fetch/API";
import EntryPoint from "./Snippets/CRUD_Operation/entry";
import App02 from "./Snippets/Custom_Hook/App02";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <h3>React Code Snippets</h3>
        <ul>
          <li>
            <Link to={"/listandkeys"}>List and Keys</Link>
          </li>
          <li>
            <Link to={"/useState"}>React useState Hook</Link>
          </li>
          <li>
            <Link to={"/useRef"}>React useRef Hook</Link>
          </li>
          <li>
            <Link to={"/useEffect"}>React useEffect Hook</Link>
          </li>
          <li>
            <Link to={"/apifetch"}>CRUD Operation</Link>
          </li>
          <li>
            <Link to={"/crud"}>API Fetch</Link>
          </li>
          <li>
            <Link to={"/customhook"}>React Custom Hook</Link>
          </li>
        </ul>
        <div>
          <Link to={"/"}>Back to Home</Link>
        </div>
      </div>
      <Routes>
        <Route path="/listandkeys" element={<ListAndKeys />} />
        <Route path="/useState" element={<UseStateHook />} />
        <Route path="/useRef" element={<UseRefHook />} />
        <Route path="/useEffect" element={<UseEffectHook />} />
        <Route path="/apifetch" element={<API />} />
        <Route path="/crud" element={<EntryPoint />} />
        <Route path="/customhook" element={<App02 />} />
      </Routes>
    </div>
  );
}

export default App;
