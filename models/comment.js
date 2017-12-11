'use strict';
module.exports = (sequelize, DataTypes) => {
	var comment = sequelize.define('comment',{
		boardId:{
			type: DataTypes.INTEGER,
			allowNull:false
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

	comment.associate = function(models){
		comment.belongsTo(models.board, {
			foreignKey: "boardId"
		})
	};

	return comment;
}
