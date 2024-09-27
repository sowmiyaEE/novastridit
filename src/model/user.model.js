const sequelize = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const user = Sequelize.define("user_v1", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20)
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull:false
        },
        email: {
            type: DataTypes.STRING(200)
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
    timestamps: true
    });
    return user;
}