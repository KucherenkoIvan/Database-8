import { accessLevels } from './accessLevels';

export const tablePrefabs = {
    Customer: {
        name: 'Customer',
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
    requiredRights: accessLevels['read-only']
    },
    Courier: {
        name: 'Courier',
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
        name: 'CourierInfo',
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
        name: 'Product',
        fields: [
            'id',
            'Name',
            'Descriprion',
        ],
    requiredRights: accessLevels['read-only']    
    },
    Stocks: {
        name: 'Stocks',
        fields: [
            'id',
            'ProductID',
            'Qty',
        ],
    requiredRights: accessLevels['read-only']
    },
    Order: {
        name: 'Order',
        fields: [
            'id',
            'CustomerID',
            'CourierID',
            'OrderDate',
        ],
    requiredRights: accessLevels['read-only']
    },
    OrderDetails: {
        name: 'OrderDetails',
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
