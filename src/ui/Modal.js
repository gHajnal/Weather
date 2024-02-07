import { useDispatch, useSelector } from "react-redux";

import { modalActions } from "../store";

import "./Modal.scss";

function Modal() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.show);
  const text = useSelector((state) => state.modal.text);
  const indication = useSelector((state) => state.modal.indication);

  const hideHandler = () => {
    dispatch(modalActions.hide());
  };

  const classes = `modal-save ${indication}`;

  setTimeout(() => {
    dispatch(modalActions.hide());
  }, 1500);

  const showOrHide = show ? (
    <div className={classes} onClick={hideHandler}>
      {text}
    </div>
  ) : null;

  return showOrHide;
}

export default Modal;
