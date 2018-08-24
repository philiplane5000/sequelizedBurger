module.exports = function (sequelize, DataTypes) {
    
    const Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Customer.associate = function (models) {
        Customer.belongsTo(models.Burger, {
            targetKey: 'burger_name'
        })
    };
    return Customer;
}