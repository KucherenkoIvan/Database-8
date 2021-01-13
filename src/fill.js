const models = {
    CourierInfo: require('./models/CourierInfo.model'),
    Courier: require('./models/Courier.model'),
    Customer: require('./models/Customer.model'),
    Product: require('./models/Product.model'),
    Stocks: require('./models/Stocks.model'),
    Order: require('./models/Order.model'),
    OrderDetails: require('./models/OrderDetails.model'),
    User: require('./models/User.model')
};

const users = {
    read: models.User.create({
        login: 'reader',
        password: 'reader',
        accessLevel: 'read-only'
    }),
    write: models.User.create({
        login: 'writer',
        password: 'writer',
        accessLevel: 'read-write'
    }),
    usercontrol: models.User.create({
        login: 'usercontrol',
        password: 'usercontrol',
        accessLevel: 'user-control'
    }),
    absolute: models.User.create({
        login: 'absolute',
        password: 'absolute',
        accessLevel: 'absolute'
    }),
}

console.log(users)

const couriers = {
    vasya: models.Courier.create({
        FName: 'Василий',
        MName: 'Петрович',
        LName: 'Прохоров',
        Salary: 30000,
        PriorSalary: 4750,
    }),
    dima: models.Courier.create({
        FName: 'Дмитрий',
        MName: 'Анатольевич',
        LName: 'Кузнецов',
        Salary: 42000,
        PriorSalary: 6750,
    }),
    vova: models.Courier.create({
        FName: 'Владимир',
        MName: 'Вадимович',
        LName: 'Власенко',
        Salary: 24000,
        PriorSalary: 3042,
    })
}

console.log(couriers)

const courierInfos = {
    vasya: models.CourierInfo.create({
        BirthDate: Date('18.08.2000'),
        Address: 'улица Пушкина, дом Колотушкина',
        Phone: '8-800-555-35-35',
        CourierID: 1
    }),
    dima: models.CourierInfo.create({
        BirthDate: Date('8.02.1994'),
        Address: 'Москва, Кремль, дом 1',
        Phone: '8-922-345-12-32',
        CourierID: 2
    }),
    vova: models.CourierInfo.create({
        BirthDate: Date('21.11.1983'),
        Address: 'LA, Ocean street, 7a',
        Phone: '8-934-872-14-14',
        CourierID: 3
    }),
}

console.log(courierInfos)

const Customers = {

}