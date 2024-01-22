var button = document.querySelector('.btn');
button.addEventListener('click', function() {
    // Get the value entered by the user
    let birthDay = document.getElementById("day").value;
    let birthMonth = document.getElementById('month').value;
    let birthYear = document.getElementById('year').value;

    // Insert the values here
    var day = document.querySelector('.put-days');
    var month = document.querySelector('.put-months');
    var year = document.querySelector('.put-years');

    // Insert error messages here
    var errorInDay = document.querySelector('.error-message-day');
    var errorInMonth = document.querySelector('.error-message-month');
    var errorInYear = document.querySelector('.error-message-year');

    // Reset error messages
    errorInDay.innerHTML = "";
    errorInMonth.innerHTML = "";
    errorInYear.innerHTML = "";

    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth() + 1;
    var todayYear = today.getFullYear();

    // Validate input
    if (birthDay === "" || isNaN(parseInt(birthDay, 10)) || birthDay < 1 || birthDay > 31) 
    {
        errorInDay.innerHTML = "Must be a valid day";
    } 
    else 
    {
        if (todayDay < birthDay) 
        {
            day.innerHTML = todayDay - birthDay + 30;
            todayMonth = todayMonth - 1;
        } 
        else 
        {
            day.innerHTML = todayDay - birthDay;
        }
    }

    if (birthMonth === "" || isNaN(parseInt(birthMonth, 10)) || birthMonth < 1 || birthMonth > 12) 
    {
        errorInMonth.innerHTML = "Must be a valid month";
    } 
    else 
    {
        if (todayMonth < birthMonth) 
        {
            month.innerHTML = todayMonth - birthMonth + 12;
            todayYear = todayYear - 1;
        } 
        else 
        {
            month.innerHTML = todayMonth - birthMonth;
        }
    }

    if (birthYear === "" || isNaN(parseInt(birthYear, 10)) || birthYear > todayYear) 
    {
        errorInYear.innerHTML = "Must be a valid year";
    } 
    else 
    {
        year.innerHTML = todayYear - birthYear;
    }
});
