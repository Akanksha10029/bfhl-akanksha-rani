import { segregateData } from "../utils/dataProcessor.js";

const user_id = "akanksha_rani_14102004";
const email = "akanksharani405@gmail.com";
const roll_number = "22CBS10029";

export const processData = (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        const { numbers, alphabets, highest_alphabet } = segregateData(data);

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
};

export const getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};
