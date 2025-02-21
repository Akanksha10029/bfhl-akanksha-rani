export const segregateData = (data) => {
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    return { numbers, alphabets, highest_alphabet };
};
