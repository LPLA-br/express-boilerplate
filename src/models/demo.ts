import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

const User = sequelize.define('User',
{
	nome:
	{
		type: DataTypes.STRING,
		allowNull: false
	},
	sobrenome:
	{
		type: DataTypes.STRING,
		allowNull: false
	}
},
{
	// Other model options go here
	timestamps: true
});

export { User };
