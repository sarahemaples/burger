// here we can grab all the data from our form
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burName").val().trim(),
            devoured: false
        };
    
        console.log("newBurger: ", newBurger);
    
        // send ajax request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger created");
                location.reload();
            }
        )
    });
});