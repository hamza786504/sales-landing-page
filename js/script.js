$(function(){

    var data = {};
    setTimeout(() => {
        $(".steps > div").removeClass("animate__fadeInRight");
    }, 1100);

    var step_no = 1;

    const getWidth = (step_no , total_steps = 7) => {
        if(step_no >= total_steps){
            return 100;
        }
        return ( step_no / total_steps ) * 100;
    }
    $("#steps_bar").css({"width" : getWidth(step_no) + "%"});

    $("#close_icon").click(function(){
        $(".model_box_cover").css({"display" : "none"});
    });


    const changestep = (from , to) => {
        $("#" + from).removeClass("animate__fadeInRight");
        $("#" + from).css({animationName : "fadeOutLeft"})
        $("#" + from).addClass("d-none");
        $("#" + to).removeClass("d-none");
        
        if(from === "step_seven"){
            $("#" + to).addClass("animate__bounceIn");
        }else{
            $("#" + to).addClass("animate__fadeInRight");
        }
    }




    // step one code
    $(".search_butn").on("click" , function(){
        var postal_code = $("#postcode").val();
        if(postal_code !== ""){
            Object.assign(data , {postal_code});
            changestep("step_one" , "step_two");
            $("#steps_bar").css({"width" : getWidth(2) + "%"});
        }else{
            alert("please add a valid postal code");
        }
    });




    // step two code
    $("#roofSizeContinue").on("click" , function(){
        var roofSize = $('input[name="roofSize"]:checked').val();
        Object.assign(data , {roofSize});
        changestep("step_two" , "step_three");
        $("#steps_bar").css({"width" : getWidth(3) + "%"});
    })


    // step three code
    $("#PropertyOwnContinue").on("click" , function(){
        var propertyOwn = $('input[name="propertyOwn"]:checked').val();
        Object.assign(data , {propertyOwn});
        changestep("step_three" , "step_four");
        $("#steps_bar").css({"width" : getWidth(4) + "%"});
    })


    // step four code
    $("#buildingTypeContinue").on("click" , function(){
        var building_type = $('input[name="building_type"]:checked').val();
        Object.assign(data , {building_type});
        changestep("step_four" , "step_five");
        $("#steps_bar").css({"width" : getWidth(5) + "%"});
    })


    // step five code
    $("#hiringTypeContinue").on("click" , function(){
        var hiring_decision = $('input[name="hiring_decision"]:checked').val();
        Object.assign(data , {hiring_decision});
        changestep("step_five" , "step_six");
        $("#steps_bar").css({"width" : getWidth(6) + "%"});
    })



    // step six code
    $("#continuePhoneNo").on("click" , function(){
        var phoneNo = $('#phone_no').val();
        if(phoneNo == "" || (phoneNo.length < 10)){
            $("#phone_no").addClass("is-invalid");
            $("#validationPhoneNo").removeClass("d-none");
        }else{
            $("#phone_no").removeClass("is-invalid");
            $("#validationPhoneNo").addClass("d-none");
            Object.assign(data , {phoneNo});

            changestep("step_six" , "step_seven");
            $("#steps_bar").css({"width" : getWidth(7) + "%"});


        }



        $("#close_modelbox").on("click", function(){
            changestep("step_seven" , "step_eight");
            $("#steps_bar").css({"width" : getWidth(7) + "%"});
            $(".model_box_cover").css({"display" : "none"});
        })

        var json_format = JSON.stringify(data);
        console.log(json_format);
    });





    $(".footer-card-header").on("click",function(){
        $(".collapse").removeClass("show");
        $("#" + this.id  + " ~ .collapse").addClass("show");
    })
})
