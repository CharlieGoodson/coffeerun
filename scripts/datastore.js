// == DataStore ==
// Модуль для работы с данными

(function(window) {
    // включаем "строгий режим"
    'use strict';

    // создание пространства имен App в глобальном контексте
    // либо использование существующего
    var App = window.App || {};
    var Promise = window.Promise;

    // определение класса DataStore
    function DataStore() {
        // добавляем свойство data для хранения данных
        this.data = {};
    }

    // добавляем методы для работы с данными
    DataStore.prototype.add = function(key, val) {
        this.data[key] = val;
        return promiseResolvedWith(null);
    }

    DataStore.prototype.get = function(key) {
        return promiseResolvedWith(this.data[key]);
    }

    DataStore.prototype.getAll = function() {
        return promiseResolvedWith(this.data);
    }

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    }

    // добавляем наш класс в пространство имен App
    App.DataStore = DataStore;

    // переписываем наше пространство имен с новыми данными
    window.App = App;
})(window);