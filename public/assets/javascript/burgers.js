// here we can grab all the data from our form
$(function() {
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var currentdev = $(this).data("newdev");
        var newdev;
        // change devoured boolean
        if (currentdev == 0){
            newdev = 1;
        } else {
            newdev = 0;
        }

        var newdevState = {
            id: id,
            devoured: newdev
        };
        console.log("from burgers.js the newdevState is: ", newdevState);
        // send PUT request
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: newdevState
        }).then(
            function() {
                console.log("changed devoured to ", newdev);
                // reload the page to get updated list
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burName").val().trim(),
            devoured: 0
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