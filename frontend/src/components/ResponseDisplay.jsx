import { useState } from "react";

const ResponseDisplay = ({ response }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (event) => {
        const { value, checked } = event.target;
        setSelectedOptions((prev) =>
            checked ? [...prev, value] : prev.filter((opt) => opt !== value)
        );
    };

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-4">
            <h2 className="text-xl mb-4">Response</h2>
            <div>
                <label className="mr-4">
                    <input
                        type="checkbox"
                        value="numbers"
                        onChange={handleSelect}
                    /> Numbers
                </label>
                <label className="mr-4">
                    <input
                        type="checkbox"
                        value="alphabets"
                        onChange={handleSelect}
                    /> Alphabets
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="highest_alphabet"
                        onChange={handleSelect}
                    /> Highest Alphabet
                </label>
            </div>

            <div className="mt-4">
                {selectedOptions.includes("numbers") && (
                    <p><strong>Numbers:</strong> {JSON.stringify(response.numbers)}</p>
                )}
                {selectedOptions.includes("alphabets") && (
                    <p><strong>Alphabets:</strong> {JSON.stringify(response.alphabets)}</p>
                )}
                {selectedOptions.includes("highest_alphabet") && (
                    <p><strong>Highest Alphabet:</strong> {JSON.stringify(response.highest_alphabet)}</p>
                )}
            </div>
        </div>
    );
};

export default ResponseDisplay;
