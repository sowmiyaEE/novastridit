const {readCSVFile} = require("../utils");
const {ValidateRow, insertChat} = require("../services/chat.service");
const showFileContents = async(req, res) => {
    try { 
        const requestBody = req.body;
        let FileName = "files/sample.csv";
        const chatData = await readCSVFile(FileName);
        let validRows= [], inValidRows =[];
        chatData.forEach(element => {
            const isValid = ValidateRow(element);
            if(!isValid) {
                inValidRows.push(element)
            }
            else validRows.push(element);
        });
        validRows.forEach (chatEntry => {
            insertChat(chatEntry);
        });
        return res.status(200).json({
            validRows: validRows,
            inValidRows:inValidRows
        });
    }
    catch(error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}
module.exports = { showFileContents }