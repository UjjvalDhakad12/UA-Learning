import React, { useState } from "react";
import wordData from "./data"; // wordData contains word meanings

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [hoveredWord, setHoveredWord] = useState(null);
    const [fullMeaning, setFullMeaning] = useState(""); // To store full sentence meaning

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

    const styles = {
        app: {
            background: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "400px",
            margin: "auto",
        },
        header: {
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
        inputContainer: {
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
        },
        input: {
            flex: 1,
            padding: "0.5rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "1rem",
        },
        button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1rem",
        },
        todoList: {
            listStyle: "none",
            padding: 0,
            margin: 0,
        },
        todoItem: {
            background: "#f9f9f9",
            border: "1px solid #ddd",
            padding: "0.7rem",
            borderRadius: "4px",
            marginBottom: "0.5rem",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.2s",
        },
        tooltip: {
            display: "none",
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
        },
        tooltipVisible: {
            display: "block",
        },
        meaningBox: {
            marginTop: "1rem",
            padding: "1rem",
            background: "#e9f7ef",
            borderRadius: "4px",
            color: "#333",
            fontSize: "1rem",
        },
    };

    return (
        <div style={styles.app}>
            <h1 style={styles.header}>Todo App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={styles.input}
                />
                <button onClick={addTodo} style={styles.button}>
                    Add
                </button>
            </div>
            <ul style={styles.todoList}>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={styles.todoItem}
                        onMouseLeave={() => setHoveredWord(null)}
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
                                        <div style={{ ...styles.tooltip, ...styles.tooltipVisible }}>
                                            Hindi Meaning: {wordData[hoveredWord]}
                                        </div>
                                    )}
                            </span>
                        ))}
                        <button
                            onClick={() => getFullMeaning(todo)}
                            style={{ ...styles.button, marginLeft: "1rem", padding: "0.3rem" }}
                        >
                            Show Full Meaning
                        </button>
                    </li>
                ))}
            </ul>
            {fullMeaning && (
                <div style={styles.meaningBox}>
                    <strong>Hindi Translation:</strong> {fullMeaning}
                </div>
            )}
        </div>
    );
};

export default App;
