// backend/models/User.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js' // your Sequelize instance

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user'
  }
})

export default User
