'use strict';
module.exports = (sequelize, DataTypes) => {
	var board = sequelize.define('board',{
		title:{
			type: DataTypes.STRING,
			allowNull: false
		},
		writer:{
			type: DataTypes.STRING,
			allowNull:false
		},
		content:{
			type: DataTypes.STRING,
			allowNull:true
		}
	});

	board.associate = function(models){
		board.hasMany(models.comment);
	};

	return board;
}
