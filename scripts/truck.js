// == Truck ==
// Модуль внутренней бизнес-логики

(function(window) {
    // включаем "строгий режим"
    'use strict';

    // создание пространства имен App в глобальном контексте
    // либо использование существующего
    var App = window.App || {};

    // определение класса Truck
    function Truck(truckId, db) {
        // добавляем свойство Id
        this.truckId = truckId;
        // добавляем свойство для БД
        this.db = db;
    }

    // метод для создания нового заказа
    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }

    // метод который удаляет указанный заказ из базы после доставки
    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    }

    // выводим все имеющиеся в наличии заказы
    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    }

    // добавляем наш класс в пространство имен App
    App.Truck = Truck;

    // переписываем наше пространство имен с новыми данными
    window.App = App;
})(window);