$("#btnSend").click(function () {
    var iAssignment = ($("#assignment").val() * .55)
    var iProjects = $("#project").val() * .05
    var iQuiz = $("#quiz").val() * .1
    var iExam = $("#exam").val() * .2
    var iIntex = $("#intex").val() * .1

    var iTotal = iAssignment + iProjects + iQuiz + iExam + iIntex

    var sGrade = ''

    if (iTotal >= 94) {
        sGrade = 'A'
    }
    else if (iTotal >= 90) {
        sGrade = 'A-'
    }
    else if (iTotal >= 87) {
        sGrade = 'B+'
    }
    else if (iTotal >= 84) {
        sGrade = 'B'
    }
    else if (iTotal >= 80) {
        sGrade = 'B-'
    }
    else if (iTotal >= 77) {
        sGrade = 'C+'
    }
    else if (iTotal >= 74) {
        sGrade = 'C'
    }
    else if (iTotal >= 70) {
        sGrade = 'C-'
    }
    else if (iTotal >= 67) {
        sGrade = 'D+'
    }
    else if (iTotal >= 64) {
        sGrade = 'D'
    }
    else if (iTotal >= 60) {
        sGrade = 'D-'
    }
    else {
        sGrade = 'E'
    }

    //alert(iTotal)
    alert("Your final percentage is: " + iTotal + " and your final grade is: " + sGrade)
})