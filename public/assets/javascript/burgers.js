// here we can grab all the data from our form
console.log("linked");
$(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log("clicked");
    var newBurger = {
        name: $("#burName").val().trim(),
        devoured: false
    };

    console.log(newBurger);
});