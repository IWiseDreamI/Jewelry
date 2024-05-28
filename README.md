# Jewelry

## Frontend:

```
Requirements:

    node - v20.12.2
    npm  - v10.5.2

Commands:
    cd frontend
    npm i
    npm run dev

Port: 3000;

```

## Backend

Создай папку backend, в ней будет находиться весь бэк
Если нужен .env создавай в корневой директории

Нужен REST API, порты свободны помимо 3000
Пока думаю нужно около 5-6 моделей, накидаю пока примерную схемку

Можешь дорабатывать и тд офк, потом исправлять будем энивей
Надеюсь ты шаришь за many to many и тд

```
Product: {
    id(autoincrement, primary);
    name(string);
    count(integer);
    price(integer);
    images(string[]);
    createdAt(datetime);
}

Order: {
    id(autoincrement, primary);
    user(User);
    products(Products[]);
    createdAt(datetime);
}

User: {
    id(autoincrement, primary);
    username(string);
    number(integer);
    password(string);
    address(string?);
    createdAt(datetime);
}
```

Ну пока хватит крч
