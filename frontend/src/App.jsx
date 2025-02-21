import { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
    const [response, setResponse] = useState(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">BFHL Challenge</h1>
            <InputForm setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
};

export default App;
