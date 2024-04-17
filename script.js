
var totalSeats = 40;


var ticketPrice = 550;


var selectedSeats = [];


function generateSeatNumbers() {
    var seatNumbersContainer = document.getElementById("seatNumbers");
    seatNumbersContainer.innerHTML = ""; 
    
    var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; 
    var seatsPerRow = 4; 

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        for (var j = 1; j <= seatsPerRow; j++) {
            var seatNumber = row + j;
            var seatNumberButton = document.createElement("button");
            seatNumberButton.textContent = seatNumber;
            seatNumberButton.className = "btn btn-outline-secondary me-2 mb-2";
            seatNumberButton.onclick = function() {
                selectSeat(this.textContent);
            };
            seatNumbersContainer.appendChild(seatNumberButton);
        }
    }

    updateAvailableSeats(); 
}


function selectSeat(seatNumber) {
    
    if (selectedSeats.includes(seatNumber)) {
        alert("Seat already selected!");
        return;
    }

    selectedSeats.push(seatNumber);

    
    document.getElementById("selectedSeats").textContent = "Selected Seats: " + selectedSeats.join(", ");

    
    var totalPrice = selectedSeats.length * ticketPrice;
    document.getElementById("totalPrice").textContent = totalPrice;

    
    if (selectedSeats.length >= 1) {
        document.getElementById("nextBtn").disabled = false;
    }

    updateAvailableSeats(); 
}


function updateAvailableSeats() {
    var availableSeats = totalSeats - selectedSeats.length;
    document.getElementById("leftedSeats").textContent = "Lefted Seats: " + availableSeats;
}


function applyCoupon() {
    var couponCode = document.getElementById("couponCodeInput").value;
    if (couponCode === "New15") {
        
        var totalPrice = parseInt(document.getElementById("totalPrice").textContent);
        var discountedPrice = totalPrice * 0.85; 
        document.getElementById("grandTotal").textContent = discountedPrice;
    } else {
        alert("Invalid coupon code!");
    }
}


function openModal() {
    
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}


document.getElementById("applyCouponBtn").addEventListener("click", applyCoupon);


document.getElementById("nextBtn").addEventListener("click", openModal);


generateSeatNumbers();
