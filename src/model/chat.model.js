
module.exports = (Sequelize, DataTypes) => {
    let chat = Sequelize.define ("chat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        chat_name: {
            type: DataTypes.STRING(200)
        },
        msg: {
            type: DataTypes.STRING(200)
        },
        status: {
            type: DataTypes.ENUM( "delivered", "not-delivered", "seen", "wrong-in-sending", "init"),
            defaultValue: "init"
        }
    }, {
        timestamps: true
    });
    return chat;
}