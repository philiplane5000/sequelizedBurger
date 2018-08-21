module.exports = function(sequelize, DataTypes) {

    const Burger = sequelize.define("Burger", {
       burger_name: {
           type: DataTypes.STRING,
           allowNull: false, 
        },
        devoured: {
            type: DataTypes.BOOLEAN, /*doube-check*/
            defaultValue: false
        } 
    });
    return Burger;
};

