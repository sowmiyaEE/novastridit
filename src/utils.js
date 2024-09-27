const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./config/config");
const csv = require("fast-csv");
const fs = require("fs");

const hashPassword = (password) => {
  try { 
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)}
  catch(error) {
    throw error;
  }
}
const generateToken = (data) => {
  try {
    return jwt.sign(data, config.SECRET, {expiresIn: 60*60})
  } catch (error) {
    throw error;
  }
}

const comparePassword =  async (password, hashPassword) => {
    try{ 
        return await bcrypt.compare(password,hashPassword);
    }
    catch(erroe) {
        throw erroe;
    }
}

const readCSVFile = (filename) => {
    try {
        const fileContents = csv.parseFile(filename);
        return fileContents;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    hashPassword,
    generateToken,comparePassword, readCSVFile
}