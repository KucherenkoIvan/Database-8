export const accessLevels = {
    'read-only': 0, // Только чтение без доступа к системной инфе
    'read-write': 1, // Чтение и запись без доступа к системной инфе
    'user-control': 2, // Чтение и запись с доступом к данным пользователей к системной инфе
    'absolute': 3 // Чтение, запись, доступ к данным пользователей и прямым sql запросам
}