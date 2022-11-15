import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import { Item } from "./constants";

observe((items: Item[]) => {
    ReactDOM.render(
        <>
            <div className="row-top">
                <img src="https://www.tutorialspoint.com/html/images/test.png"></img>
                UD Interior Designer
            </div>
            <div className="row">
                <div className="column-left">
                    Furniture
                    <img src="https://www.example.com/images/dinosaur.jpg"></img>
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
