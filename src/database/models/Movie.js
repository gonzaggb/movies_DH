module.exports = (sequelize, dataTypes) => {
    const alias = 'Movie'
    const columns = {
    title: {
        type: dataTypes.STRING(500),
        allowNull: false
    },
    rating: {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    awards: {
        type: dataTypes.INTEGER(10),
        allowNull: false
    },
    releaseDate: {
        type: dataTypes.DATE,
        allowNull: false
    },
    length: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    genre_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: dataTypes.DATE
    },
    updated_at: {
        type: dataTypes.DATE
    }
}
    const config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    }
   
    const Model = sequelize.define(alias, columns, config);
    return Model;
   }


