(function() {
    'use strict';

    var STRENGHT_LEVEL_SELECTOR = '[data-coffee-order="level"]';
    var STRENGHT_LABEL_SELECTOR =  '[data-coffee-order="label"]';

    var LOW_LEVEL_CLASS = 'label-primary';
    var MIDDLE_LEVEL_CLASS = 'label-warning';
    var HIGH_LEVEL_CLASS = 'label-danger';

    var FIRST_LEVEL_VALUE = 33;
    var SECOND_LEVEL_VALUE = 67;
    var DEFAULT_VALUE = 30;

    var level = document.querySelector(STRENGHT_LEVEL_SELECTOR);
    var label = document.querySelector(STRENGHT_LABEL_SELECTOR);

    function showLowLabel() {
        label.classList.add(LOW_LEVEL_CLASS);
        label.classList.remove(MIDDLE_LEVEL_CLASS, HIGH_LEVEL_CLASS);
    }

    function showMiddleLabel() {
        label.classList.add(MIDDLE_LEVEL_CLASS);
        label.classList.remove(HIGH_LEVEL_CLASS, LOW_LEVEL_CLASS);
    }
    
    function showHighLabel() {
        label.classList.add(HIGH_LEVEL_CLASS);
        label.classList.remove(MIDDLE_LEVEL_CLASS);
    }

    function showCurrentValue(value) {
        label.textContent = value;
    }

    function strengthLevelHandler() {
        level.addEventListener('change', function() {
            showCurrentValue(this.value);
            if (this.value < FIRST_LEVEL_VALUE) {
                showLowLabel();
            } else if (this.value < SECOND_LEVEL_VALUE) {
                showMiddleLabel();
            } else {
                showHighLabel();
            }
        });
    }

    function resetAddons() {
        showCurrentValue(DEFAULT_VALUE);
        showLowLabel();
    }

    function resetButtonHandler() {
        var reset = document.querySelector('[type="reset"]');
        reset.addEventListener('click', function(event) {
            resetAddons();
        });
    }

    strengthLevelHandler();
    resetButtonHandler();
    
    window.resetAddons = resetAddons;

})();