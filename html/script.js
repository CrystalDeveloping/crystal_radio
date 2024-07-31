$('.radiobg').hide();
$('#numberInput').hide();
$('#submitButton').hide();

$(() => {
    window.addEventListener('message', (event) => {
        let data = event.data;
        if (data.action === "showRadio") {
            $('.container').fadeIn(100);
            $('.radiobg').fadeIn(100);
            $('#numberInput').fadeIn();
            $('#submitButton').fadeIn();
        } else if (data.action === "hideRadio") {
            $('.container').fadeOut(100);
            $('.radiobg').fadeOut(100);
            $('#numberInput').hide();
            $('#submitButton').hide();
        }
    });
});

$(document).keyup(function (e) {
	if (e.keyCode === 27) {

		$.post('https://crystal_radio/close', JSON.stringify({}));
		$(".container").fadeOut("slow", function () {

			$(".container").fadeOut();
		});

	}
});

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const numberInput = document.getElementById('numberInput');

    submitButton.addEventListener('click', function () {
        const numberValue = parseInt(numberInput.value, 10);

        if (isNaN(numberValue)) {
            return;
        }

        if (numberValue > 500) {
            return;
        }

        fetch(`https://${GetParentResourceName()}/submitNumber`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: numberValue }),
        })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
        });
    });
});