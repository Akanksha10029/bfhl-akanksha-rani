import { useState } from "react";
import { fetchData } from "../utils/api";

const InputForm = ({ setResponse }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jsonData = JSON.parse(input);
            if (!jsonData.data || !Array.isArray(jsonData.data)) {
                throw new Error("Invalid JSON structure");
            }

            const response = await fetchData(jsonData);
            setResponse(response);
            setError("");
        } catch (err) {
            setError("Invalid JSON. Please enter a valid object.");
        }
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Enter JSON Data</h2>
            <textarea
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                rows="4"
                placeholder='{"data": ["A", "C", "z"]}'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            {error && <p className="text-red-400 mt-2">{error}</p>}
            <button
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default InputForm;
