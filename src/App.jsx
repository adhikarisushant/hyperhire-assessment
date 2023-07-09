import Header from "./components/Header";
import Post from "./components/Post";
import InputGroup from "./components/InputGroup";
import "./App.css";

function App() {
  return (
    <div className="app_wrapper">
      <div className="pop_container">
        <Header />
        <Post />
        <InputGroup />
      </div>
    </div>
  );
}

export default App;
