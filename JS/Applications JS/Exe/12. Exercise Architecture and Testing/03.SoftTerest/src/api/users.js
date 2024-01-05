import { get, post } from "./api.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
};

export async function login(email, password) {
    try {
        const user = await post(endpoints.login, { email, password });
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.error(`Login error: ${error.message}`);
        // Тук можете да добавите логика за обработка на грешката
    }
}

export async function register(email, password) {
    try {
        const user = await post(endpoints.register, { email, password });
        localStorage.setItem('user', JSON.stringify(user));
        return user; // Връщане на резултата за допълнителна обработка
    } catch (error) {
        console.error(`Registration error: ${error.message}`);
        // Тук можете да добавите логика за обработка на грешката
        throw error;
    }
}

export async function logout() {
    try {
        const response = await get(endpoints.logout);
        localStorage.removeItem('user');
        // Можете да добавите логика за обработка на резултата от GET заявката (response)
    } catch (error) {
        console.error(`Logout error: ${error.message}`);
        // Тук можете да добавите логика за обработка на грешката
        throw error;
    }
}
