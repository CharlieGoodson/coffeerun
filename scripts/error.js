formHandler.addSubmitHandler(function (data) {
    try {
        myTruck.createOrder(function (error) {
            if (error) {
                throw new Exception(error)
            } else {
                try {
                    saveOnServer(function (error) {
                        if (error) {
                            throw new Exception({message: 'server error'});
                        } else {
                            try {
                                checkList.addRow();
                            } catch (e2) {
                                handleDomError(e2);
                            }
                        }
                    });
                } catch (e) {
                    handleServerError(e, function () {
                    // Снова пытаемся добавить строку
                        try {
                            checkList.addRow();
                        } catch (e3) {
                            handleDomError(e3);
                        }
                    });
                }
            }
        });
    } catch (e) {
        alert('Something bad happened.');
    }
});