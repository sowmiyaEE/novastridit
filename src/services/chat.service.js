const chatModel = require("../model/chat.model");

let ChatModel;

const setModel = (sequelizeModel) => {
    ChatModel = sequelizeModel;
}

const ValidateRow = (data) => {
    try {
        let c= 0;
        const requiredRows = ["chat_name", "status", "msg"];
        Object.keys(data).forEach( (key) => {
            if(requiredRows.includes(key)) { c++; }
        })
        if ( c !== requiredRows.length) {
            return false;
        }
        else 
        return true;
    }
    catch(error) {
        throw error;
    }
}
const insertChat = async (data) => {
    try {
        const chatCreate = await ChatModel.create(data);
        if(chatCreate) {
            return true;
        }
        else {
            return false;
        }
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    setModel,
    ValidateRow,
    insertChat
}