
function kiemTra() {
    var diem = 0;
    var form = document.getElementById("surveyForm");

    // Kiểm tra nhóm 1: Lựa chọn đúng sai
    for (var i = 1; i <= 10; i++) {
        var cauTraLoi = form.querySelector(`input[name="question${i}"]:checked`);

        if (cauTraLoi !== null) {
            if (cauTraLoi.value === "true") 
            diem += 0.25;
        }
    }

    // Kiểm tra nhóm 2: Chọn 1 trong 4 đáp án
    for (var i = 11; i <= 20; i++) {
        var cauTraLoi = form.querySelector(`input[name="question${i}"]:checked`);

        if (cauTraLoi !== null && cauTraLoi.value === "A") {
            diem += 0.25;
        }
    }

    // Kiểm tra nhóm 3: Chọn nhiều đáp án
    for (var i = 21; i <= 30; i++) {
        var cauTraLoi = Array.from(form.querySelectorAll(`input[name="question${i}"]:checked`)).map(function (el) {
            return el.value;
        });
        var cauTraLoiDung = ['A', 'B'];

        if (JSON.stringify(cauTraLoi.sort()) === JSON.stringify(cauTraLoiDung.sort())) {
            diem += 0.25;
        }
    }

    // Kiểm tra nhóm 4: Câu hỏi tự luận
    for (var i = 31; i <= 40; i++) {
        var question = form["question" + i].value.trim();
        if (question !== "") {
            diem += 0.25; 
        }
    }

    localStorage.setItem('diem', diem);

}
