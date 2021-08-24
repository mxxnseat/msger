import { FC, useEffect } from "react";
import Chat from "./components/chat";
import Auth from "./components/auth";


import { IAuth } from "./types/auth";

import { Authenticate } from "./helpers/Authenticate";

const authenticate = new Authenticate();

const App: FC = () => {

  useEffect(() => {
    authenticate.checkLogin()
      .then((data: IAuth | null) => {
        //TODO store
        if (data === null) {

        }
      });
  }, []);

  return (
    <div className="container-fluid">
      {true ? <Auth /> : <Chat />}
    </div>
  )
}
export default App;
