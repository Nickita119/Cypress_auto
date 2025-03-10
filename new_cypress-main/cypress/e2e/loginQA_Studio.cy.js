describe('Проверка авторизации', function () {
// Позитивный кейс авторизации
    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка валидного текста
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть виден для пользователя
     })
// Проверка на негативный кейс авторизации
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio12'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка валидного текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть виден для пользователя
    })
// Проверка на негативный кейс валидации
    it('Проверка что в логине есть собачка', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка валидного текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть виден для пользователя
    })
// Проверка логики восстановления пароля
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
    
        cy.get('#forgotEmailButton').click(); // Нажал войти
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввёл почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста на странице восстановления
        
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть виден для пользователя
    })

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка валидного текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть виден для пользователя
    })


 })
 
 
 // 1) Ввести правильный логин
 // 2) Ввести правильный пароль
 // 3) Нажать войти 
 // 4) ПРоверить нужный текст и наличие кнопки крестик 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome