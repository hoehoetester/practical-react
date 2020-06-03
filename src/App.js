import React from "react";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    );
};

toast.configure();
function App() {
    const notify = () => {
        toast("Basic notification!");
        toast.success("Basic notification!", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 8000,
        });
        toast.error("Basic notification!", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false,
        });
        toast.warn(<CustomToast />, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <div className="App">
            <h1>React</h1>
            <button onClick={notify}>Notify</button>
        </div>
    );
}

export default App;
