import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import wordData from "../data";
import './Input.css'

const Input = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [hoveredWord, setHoveredWord] = useState(null);
    const [fullMeaning, setFullMeaning] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const getFullMeaning = (sentence) => {
        const words = sentence.split(" ");
        const translatedWords = words.map(
            (word) => wordData[word.toLowerCase()] || word
        );
        setFullMeaning(translatedWords.join(" "));
    };

    return (
        <div>
            <div className="Message">
                <input
                    title="Write Message"
                    placeholder="Type your text..."
                    className="MsgInput"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="send-icon" onClick={addTodo}>
                    <SendIcon />
                </button>
            </div>
            <div>
                <ul className="todo-style">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            onMouseLeave={() => setHoveredWord(null)}
                            style={{
                                marginBottom: "0.5rem",
                                position: "relative",
                                listStyle: "none",
                            }}
                        >
                            {todo.split(" ").map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    onMouseEnter={() => setHoveredWord(word.toLowerCase())}
                                    style={{ margin: "0 0.3rem", position: "relative" }}
                                >
                                    {word}
                                    {hoveredWord === word.toLowerCase() &&
                                        wordData[hoveredWord] && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "110%",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    background: "#333",
                                                    color: "#fff",
                                                    padding: "0.5rem",
                                                    borderRadius: "4px",
                                                    fontSize: "0.9rem",
                                                    whiteSpace: "nowrap",
                                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                                    zIndex: 1,
                                                }}
                                            >
                                                Hindi Meaning: {wordData[hoveredWord]}
                                            </div>
                                        )}
                                </span>
                            ))}
                            <button
                                onClick={() => getFullMeaning(todo)}
                                style={{
                                    marginLeft: "1rem",
                                    padding: "0.3rem",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                Show Full Meaning
                            </button>
                        </li>
                    ))}
                </ul>
                {fullMeaning && (
                    <div
                        style={{
                            marginTop: "1rem",
                            padding: "1rem",
                            background: "#e9f7ef",
                            borderRadius: "4px",
                            color: "#333",
                            fontSize: "1rem",
                        }}
                    >
                        <strong>Hindi Translation:</strong> {fullMeaning}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
