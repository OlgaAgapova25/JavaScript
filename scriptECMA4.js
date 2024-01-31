// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.


const getUser = async (api) => {
    const res = await fetch(api);
    const user = await res.text();
    console.log(user);
}

const api = 'https://jsonplaceholder.typicode.com/users';

getUser();