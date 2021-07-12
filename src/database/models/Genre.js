module.exports = (sequelize, dataTypes) => {
    const alias = 'Genre'
    const columns = {
    name: {
        type: dataTypes.STRING(100),
        allowNull: false
    },
    ranking: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    active: {
        type: dataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: dataTypes.DATE
    },
    updatedAt: {
        type: dataTypes.DATE
    }
}
    const config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true
    }
   
    const Model = sequelize.define(alias, columns, config);
    return Model;
   }


