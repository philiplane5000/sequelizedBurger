module.exports = function (sequelize, DataTypes) {
    
    const Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Customer.associate = function (models) {
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Customer;
}