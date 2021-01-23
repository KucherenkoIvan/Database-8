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
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },
    Courier: {
        name: 'Courier',
        fields: [
            'id',
            'FName',
            'MName',
            'LName',
            'Salary',
            'PriorSalary',
        ],
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
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
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },
    Product: {
        name: 'Product',
        fields: [
            'id',
            'Description',
            'Name',
        ],
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },
    Stocks: {
        name: 'Stocks',
        fields: [
            'id',
            'ProductID',
            'Qty',
        ],
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },
    Order: {
        name: 'Order',
        fields: [
            'id',
            'CustomerID',
            'CourierID',
            'OrderDate',
        ],
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },
    OrderDetails: {
        name: 'OrderDetails',
        fields: [
            'id',
            'LineItem',
            'OrderID',
            'ProductID',
            'Qty',
            'Price',
            'TotalPrice',
        ],
        requiredRights: {
            read: accessLevels['read-only'],
            write: accessLevels['read-write'],
        }
    },    
    User: {
        name: 'User',
        fields: [
            'id',
            'login',
            'password',
            'accessLevel'
        ],
        requiredRights: {
            read: accessLevels['user-control'],
            write: accessLevels['user-control'],
        }
    },
    Sql: {
        name: 'Sql',
        fields: ['result'],
        requiredRights: {
            read: accessLevels.absolute,
            write: accessLevels.absolute,
        }
    }
};
