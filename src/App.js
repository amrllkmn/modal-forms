import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalComponent from "./components/ModalComponent";

import useModal from "./helpers/useModal";

function App() {
    const { isShowing, toggle } = useModal();
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <p>Involve Asia Coding Test</p>
                    <Button variant="primary" onClick={toggle}>
                        Open Modal Form
                    </Button>
                </header>
            </div>
            <ModalComponent
                isShowing={isShowing}
                handleClose={toggle}
            ></ModalComponent>
        </>
    );
}

export default App;
