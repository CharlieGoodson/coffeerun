(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            fn(email);
            setTimeout(function() {
                this.removeRow(email);
            }.bind(this), 1000);
        }.bind(this));
    }

    CheckList.prototype.addRow = function(coffeOrder) {
        this.removeRow(coffeOrder.emailAddress);
        var rowElement = new Row(coffeOrder);
        this.$element.append(rowElement.$element);
    }

    CheckList.prototype.removeRow = function(email) {
        this.$element.find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    }

    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        
        var $label = $('<label></label>');
        
        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        var description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';
        
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;

        // <div data-coffee-order="checkbox" class="checkbox">
        //     <label>
        //         <input type="checkbox" value="chewie@rrwwwgg.com">
        //                 tall mocha iced coffee, (chewie@rrwwwgg.com) [39x]
        //     </label>
        // </div>
    }

    App.CheckList = CheckList;
    window.App = App;

})(window);