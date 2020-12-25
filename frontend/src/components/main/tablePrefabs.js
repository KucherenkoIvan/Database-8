export const tablePrefabs = {
    Customer: {
        fields: [
            'id',
            'FName',
            'MName',
            'LName',
            'Address',
            'City',
            'Phone',
            'DateInSystem',
        ],
    },
    Courier: {
        fields: [
            'id',
            'FMame',
            'MName',
            'LName',
            'Salary',
            'PriorSalary',
        ],
    requiredRights: accessLevels['read-only']
    },
    CourierInfo: {
        fields: [
            'id',
            'CourierID',
            'BirthDate',
            'Address',
            'Phone',
        ],
    requiredRights: accessLevels['read-only']
    },
    Product: {
        fields: [
            'id',
            'Name',
            'Descriprion',
        ],
    requiredRights: accessLevels['read-only']    
    },
    Stocks: {
        fields: [
            'id',
            'ProductID',
            'Qty',
        ],
    requiredRights: accessLevels['read-only']
    },
    Order: {
        fields: [
            'id',
            'CustomerID',
            'CourierID',
            'OrderDate',
        ],
    requiredRights: accessLevels['read-only']
    },
    OrderDetails: {
        fields: [
            'id',
            'OrderID',
            'LineItem',
            'ProductID',
            'Qty',
            'Price',
            'TotalPrice',
        ],
    requiredRights: accessLevels['read-only']
    },    
    User: {
        name: 'User',
        fields: [
            'id',
            'login',
            'password',
            'accessLevel'
        ],
    requiredRights: accessLevels['user-control']
    },
};
