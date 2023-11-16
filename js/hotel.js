// hotel registration -- store in an object
var test = {
    hotelname: "Marriot",
    room: 456,
    booked: 60,
    display: function () {
        return this.hotelname;
    }

};

//access the propirty / change properties
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;


//start hotel reservation program
var guestGroup = [];
function reservation() {
    console.log("click work");
    // get val from for and insert to obj
    var guest = {
        name: $('#name').val(),
        numberOfGuest: $('num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        room: $('#room').val()
    };

    //push obj into array

    console.log(guest);
    guestGroup.push(guest);

};

function displaylist() {
    console.log(guestGroup);
    $('#guestlist').html("");
    $('#guestlist').append("<table>");
    for (let i in guestGroup) {
        $('#guestlist').append("<tr> <td>" + guestGroup[i].name + "</td>" + "<td>" + guestGroup[i].numberOfGuest + "</td>" + "<td>" + guestGroup[i].checkin + "</td>" + "<td>" + guestGroup[i].checkout + "</td>" + "<td>" + guestGroup[i].room + "</td>" + "</tr>")
    }
    $('#guestlist').append("</table>");

};




// regiter the event
$('#submit').click(reservation);
$('#lists').click(displaylist);