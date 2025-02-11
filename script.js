$(document).ready(function() {
    console.log("Welcome to the Interactive Computer Lab!");
    
    // Make elements draggable
    $(".seat").draggable({ containment: "#computerLab" });
    $(".pc").draggable({ containment: "#computerLab" });
    $("#door").draggable({ containment: "#computerLab" });
    
    // Handle click events to show position
    $(document).on("click", (event) => {
        let clickedId = event.target.id;
        if (clickedId) {
            alert("Clicked: " + clickedId);
            let $clickedElement = $('#' + clickedId);
            alert("Top position: " + $clickedElement.position().top);
            
            console.log(
                "Element: ", clickedId, 
                "Left position: ", $clickedElement.position().left
            );
        }
    });
});