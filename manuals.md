# ПРОЧИТАЙ!!1!1!!1
    Очень важная инфа, к тому же я старался

# HOW??
    Работает это все по принципу очереди: пихаешь уведомление, 
    NotificationController* достает его из очереди и некоторое время держит на экране [* - это тот компонент, который в /frontend/src/components/notifications]
    Потом уведомление пропадает и отображается следующее
    Или не отображается, если очередь пуста

# БАГ!!!
    Я не проработал асинхронное добавление, займусь этим позже
    Суть в том, что если с очередью будут одновременно взаимодействовать несколько источников, все пойдет по пизде
    А именно сломается последовательность достатьиз очереди - показать - скрыть - достать .... etc.
    И уведомления начнут появляться/пропадать хуй пойми каким образом
    В принципе, пока источников уведомлений у нас не много и так пока проканает, но я потом все равно поправлю
    Я предупредил, чтобы ты не пугался [meow<3]

# ХУЛЕ ДЕЛАТЬ ТО??
    Тебе нужно стилизовать уведомление, чтобы оно сексуально выглядело и не ебало верстку (хотя бы до ширины 1024px - меньше уже не особо важно)
    Будет круто, если ты сможешь реализовать разные типы уведомлений
    Но если будет прям пиздец не понятно или тебе и без этого хватит ебли - забей, я сделаю
    Ну и сейчас у нас в авторизации ошибки выводятся под форму, там можешь сразу переключить на уведомление (см. раздел "КАК КАКАТЬ?!")

# КАК КАКАТЬ?!
    Смотри какую хуйню придумал:
    Тебе нихуя не понятно будет без примеров в коде, а я в офисе, так что показать не смогу
    Поэтому тут у нас есть интерактивная инструкция
    Выделяешь id примера (он выглядит в духе @tip_test01), тыкаешь `ctrl+shift+F` и переходишь к этому id (мб даже и в другом файле, будь внимателен)
    Теперь
    Если ты не хочешь париться с типами уведомлений, а собираешься только писать стили - @tip_styles00
                            
    Если ты топ прогер, хочешь на работу в [COMPANY_NAME] и готов поебаться с redux'ом - @tip_redux00
    (не сцы, я распишу про redux, и покажу, что к чему)