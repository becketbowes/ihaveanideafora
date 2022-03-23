const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../Controller/connection');

class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        role: {
            type: DataTypes.INTEGER,
            //pick from dropdown, idea - 1, coder - 2, both - 3
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            // stored as a URL for now
            allowNull: true
        },
        aboutme: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        hooks: {
            async preCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
            },
            async preUpdate(updateUser) {
                updateUser.password = await bcrypt.hash(updateUser.password, 10);
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;