import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import { Item } from "./constants";

observe((items: Item[]) => {
    const [selectedRadioBtn, setSelectedBtn] = React.useState("radio1");

    const isRadioSelected = (value: string): boolean =>
        selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setSelectedBtn(e.currentTarget.value);
    ReactDOM.render(
        <>
            <div className="row-top">
                <img src="images/udmonogram.jpg"></img>
                UD Interior Designer
            </div>
            <div className="row">
                <div className="column-left">
                    Furniture
                    <img src="https://www.example.com/images/dinosaur.jpg"></img>
                    <input
                        type="radio"
                        name="radio-button"
                        value="radio1"
                        checked={isRadioSelected("radio1")}
                        onChange={handleRadioClick}
                    />
                    <input
                        type="radio"
                        name="radio-button"
                        value="radio2"
                        checked={isRadioSelected("radio2")}
                        onChange={handleRadioClick}
                    />
                    <input
                        type="radio"
                        name="radio-button"
                        value="radio3"
                        checked={isRadioSelected("radio33")}
                        onChange={handleRadioClick}
                    />
                </div>
                <div className="column-right">
                    <React.StrictMode>
                        <div
                            style={{
                                width: "80vh",
                                height: "80vh"
                            }}
                        >
                            <Board items={items} />
                        </div>
                    </React.StrictMode>
                </div>
            </div>
        </>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
