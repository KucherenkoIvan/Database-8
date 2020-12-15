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
    },
    Product: {
        name: 'Product',
        fields: [
            'id',
            'Name',
            'Descriprion',
        ],
    },
    Stocks: {
        name: 'Stocks',
        fields: [
            'id',
            'ProductID',
            'Qty',
        ],
    },
    Order: {
        name: 'Order',
        fields: [
            'id',
            'CustomerID',
            'CourierID',
            'OrderDate',
        ],
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
    },    
    User: {
        name: 'User',
        fields: [
            'id',
            'login',
            'password',
            'accessLevel'
        ],
    },
};
