$(document).ready(function () {

    $("#sub-new").on("click", function (event) {

        event.preventDefault();

        let burgerData = {
            burger_name: $("#new-burger").val().trim()
        }

        $.ajax({
            url: "/add/burger",
            type: "POST",
            data: burgerData,
            success: function (data) {
                console.log(`CREATED NEW BURGER WITH ID: ${data.id}`);
                $("#new-burger").val("");
                location.reload();
            }
        })

    })

    $(".devour-btn").on("click", function (event) {

        event.preventDefault();

        let burgerName = $(this).data("attribute");
        let burgerID = $(this).data("id");
        let devoured = $(this).data("state");
        let customerName = $(`#customer-${burgerID}`).val().trim();

        if (!$(`#customer-${burgerID}`).val().trim()) {
            alert("Customer Name Field Blank")
            return
        }

        let devourBurger = {
            burger_name: burgerName,
            id: burgerID,
            devoured: devoured,
            customer_name: customerName
        }

        $.ajax({
            url: "/update/burger",
            type: "PUT",
            data: devourBurger,
            success: function () {
                console.log("BURGER DEVOURED");
                location.reload();
            }

        })

    })

})