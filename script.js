// $(document).ready(function() {

//     $(".submit1").on("click", function(){

//       $.ajax({



//         type: 'GET',
//         url: "https://api.icndb.com/jokes/random",
//         dataType: 'json',
//         success: function(result){
//               $(".thequote").html(result.value.joke);
//         }

//       });
//     });

// });

$(document).ready( function() {
    $(".getQuoteButton").on("click", function(){
        $.ajax({
            type: 'GET',
            url: "https://api.icndb.com/jokes/random",
            dataType: 'json',
            success: function(response) {
                console.log("It works!")
            }
        });
    });
});