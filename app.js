// BUDGET CONTROLLER
var budgetController = (function() {

    // Some Code


})();



// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputVal: '.add__value',
        inputBtn: '.add__btn'
    }

    
    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
            description: document.querySelector(DOMstrings.inputDesc).value,
            value: document.querySelector(DOMstrings.inputVal).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };


})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

    }

    var ctrlAddItem = function () { 

        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller
        // 3. Add the item to the UI 
        // 4. Calculate the budget
        // 5. Display budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();