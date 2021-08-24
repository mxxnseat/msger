import {FC} from "react";
import Chat from "./components/chat";
import Auth from "./components/auth";

const App: FC = ()=>{

  return (
    <div className="container-fluid">
      {true ? <Auth /> : <Chat />}
    </div>
  )
}
export default App;
