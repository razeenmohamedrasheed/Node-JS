const fs = require("fs");
const path = require("path");

const getFileData = () => {
    try {
        // Use path.join to ensure the correct file path
        const filePath = path.join(__dirname, '../Files/students.json');
        const data = fs.readFileSync(filePath, 'utf8'); // Ensure the file is read as a string
        const JSONdata = JSON.parse(data);  // Parse the JSON content
        return JSONdata;
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
        throw error;  // Re-throw to be caught in the calling function
    }
};
const getUserData = async (request, response) => {
    try {
        const res = getFileData();
        response.json(res);
    } catch (error) {
        console.error('Internal Server Error:', error); // Log error for debugging
        response.status(500).json("Internal Server Error");
    }
}

module.exports ={
    getUserData
}