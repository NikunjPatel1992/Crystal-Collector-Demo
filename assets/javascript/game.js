
$(document).ready(function () {

    //alert("this is javascript");

    //create variable 
    var win = 0;
    var loss = 0;
    var score = 0;

    //computer generate random number
    var computerchoice = Math.floor(Math.random() * 100) + 20;
    console.log(computerchoice);
    $("#rendomnumber").html(computerchoice);

    //random number for first image
    var firstrandomnumber = Math.floor(Math.random() * 12) + 1;
    console.log("first rendomnumber" + firstrandomnumber);
    $("#imgfirst").html("<img src=" + "assets/image/first1.png " + " value=" + firstrandomnumber + ">");

    //random number for second image
    var secondrandomnumber = Math.floor(Math.random() * 12) + 1;
    console.log("second rendomnumber" + secondrandomnumber);
    $("#imgsecond").html("<img src=" + "assets/image/second.png" + " value=" + secondrandomnumber + ">");

    // random number for third image
    var thirdrandomnumber = Math.floor(Math.random() * 12) + 1;
    console.log("third rendomnumber" + thirdrandomnumber);
    $("#imgthird").html("<img src=" + "assets/image/third.png" + " value=" + thirdrandomnumber + ">");

    //random number for forth image
    var forthrandomnumber = Math.floor(Math.random() * 12) + 1;
    console.log("forth rendomnumber" + forthrandomnumber);
    $("#imgforth").html("<img src=" + "assets/image/forth.png" + " value=" + forthrandomnumber + ">");


    //-----------------------------------------------------------------------------------

    //===================================================================================
    //reset all value 
    function reset() {

        //reset comptur random number
        var computerchoice = Math.floor(Math.random() * 100) + 20;
        console.log(computerchoice);
        $("#rendomnumber").html("Your " + computerchoice);

        //reset score = 0
        score = 0;
        $("#myscore").html(score);

        //random number for first image
        var firstrandomnumber = Math.floor(Math.random() * 12) + 1;
        console.log("first rendomnumber" + firstrandomnumber);
        $("#imgfirst").html("<img src=" + "assets/image/first1.png" + " value=" + firstrandomnumber + ">");

        //random number for second image
        var secondrandomnumber = Math.floor(Math.random() * 12) + 1;
        console.log("second rendomnumber" + secondrandomnumber);
        $("#imgsecond").html("<img src=" + "assets/image/second.png" + " value=" + secondrandomnumber + ">");

        // random number for third image
        var thirdrandomnumber = Math.floor(Math.random() * 12) + 1;
        console.log("third rendomnumber" + thirdrandomnumber);
        $("#imgthird").html("<img src=" + "assets/image/third.png" + " value=" + thirdrandomnumber + ">");

        //random number for forth image
        var forthrandomnumber = Math.floor(Math.random() * 12) + 1;
        console.log("forth rendomnumber" + forthrandomnumber);
        $("#imgforth").html("<img src=" + "assets/image/forth.png" + " value=" + forthrandomnumber + ">");

        //on click
        $("img").click(function () {
            //alert("it works!");
            var newscore = score += parseInt($(this).attr("value"));
            $("#myscore").html(newscore);

            if (newscore === computerchoice) {
                win++;
                $("#win").html(win);
                $("#result").html("You Are won..")
               
                alert("Yor Are Win");
                reset();
            }
            if (newscore > computerchoice) {
                loss++;
                $("#loss").html(loss);
                $("#result").html("You Are loss..")
                alert("Yor Are Loss");
                reset();
            }
        });

    }

    //----------------------------------------------------

    //---------------------------------------
    // on click function
    $("img").click(function () {
        //alert("it works!");
        var newscore = score += parseInt($(this).attr("value"));
        $("#myscore").html(newscore);

        if (newscore === computerchoice) {
            win++;
            $("#win").html(win);
            $("#result").html("You Are won..")
            
            alert("Yor Are Win");
            reset();
        }
        if (newscore > computerchoice) {
            loss++;
            $("#loss").html(loss);
            $("#result").html("You Are loss..")
            alert("Yor Are Loss");
            reset();
        }
    });



});