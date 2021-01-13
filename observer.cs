// @example_observer00

class observerExample {
    private object value; // Значение. Оно не просто так private
    private List<Action> subscribers; // Список методов, которые вызываются после изменения значения

    public observerExample(object value) { // Конструктор. Нихуя сложного
        this.value = value;
        subscribers = new List<Action>();
    }

    public object getValue() { // Функция для получения значения
        return value;
    }

    public void setValue(object newValue) { // Функция для установки значения
        this.value = newValue;

        callSubscribers(); // Тут внимательнее
    }

    private void callSubscribers() { // В этой функции мы будем вызывать все методы-подписчики и уведомлять их о смене значения
        foreach(var s in subscribers) {
            s();
        }
    }

    public void Subscribe(Action listener) { // Ну и функция для подписки
        subscribers.Append(listener);
    }
}

// Ну и хуле? А нихуя.
// Это на самом деле очень полезная поебота, но сначала важная ремарка
// В этом примере не использовались функции шарпа вроде свойств и событий. Это не критично в случае с примером. Суть все равно передана
// Так вот, что это нам дает?
// У нас есть глобальное значение, на изменение которого мы можем подписаться и при каждом изменении значения будем обы этом знать
// А что же это такое? Ровно то, что нам и нужно.
// Мы остановились тут @example_observer00