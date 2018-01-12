(function(window) {
    'use strict';
    var App = window.App || {};
    // явно импортируем JQuery
    var $ = window.jQuery;
    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        // если JQuery ничего не нашла выбрасываем ошибку!
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window);