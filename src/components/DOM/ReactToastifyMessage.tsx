import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastifyMessage = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default ReactToastifyMessage;
