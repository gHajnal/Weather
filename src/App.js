import { Outlet } from "react-router-dom";

import Modal from "./ui/Modal";

import "./styles/main.scss";
import { useDispatch } from "react-redux";
import { capitalActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isSaved = sessionStorage.getItem("persistedState")?.length > 0;

  if (isSaved) {
    dispatch(capitalActions.getPersistedCapitals());
  }

  return (
    <div className="container">
      <Modal />
      <Outlet />
    </div>
  );
}

export default App;
