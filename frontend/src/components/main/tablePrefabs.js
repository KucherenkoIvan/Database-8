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
    },
    CourierInfo: {
        fields: [
            'id',
            'CourierID',
            'BirthDate',
            'Address',
            'Phone',
        ],
    },
    Product: {
        fields: [
            'id',
            'Name',
            'Descriprion',
        ],
    },
    Stocks: {
        fields: [
            'id',
            'ProductID',
            'Qty',
        ],
    },
    Order: {
        fields: [
            'id',
            'CustomerID',
            'CourierID',
            'OrderDate',
        ],
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
    },
};
