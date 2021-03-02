/*
пользователь вводит дату в формате
гггг-мм-дд
вы выводите красиво сообщение о том сколько прошло с или осталось до лет, месецев, дней
или это сегодня
*/

let dateUser = new Date(prompt('Введите дату','2018-09-30'));
let dateNow = new Date();

let date_dateNow = dateNow.getDate();
let date_dateUser = dateUser.getDate();

let ms_dateUser = dateUser.getTime();
let ms_dateNow = dateNow.getTime();

let days, months, years;
let daysStr, monthsStr, yearsStr;

function checkTime(){
    let difference;
    if(ms_dateNow>ms_dateUser){
        difference = ms_dateNow-ms_dateUser;
        if(difference < 86400000 && date_dateNow == date_dateUser){
            alert('Это сегодня');
            return;
        }
        countTime(dateNow, dateUser);
        setEnd();
        alert(`Прошло ${years} ${yearsStr}, ${months} ${monthsStr}, ${days} ${daysStr} с введенной даты`);
    }
    else if(ms_dateNow<ms_dateUser){
        difference = ms_dateUser-ms_dateNow;
        if(difference < 86400000 && date_dateNow == date_dateUser){
           alert('Это сегодня');
            return;
        }
        countTime(dateUser, dateNow);
        setEnd();
        alert(`Осталось ${years} ${yearsStr}, ${months} ${monthsStr}, ${days} ${daysStr} до введенной даты`);
    }
    else{
        alert('Это сегодня');
        return;
    }
}

function countTime(moreTime, lessTime){
    let timeInterval = moreTime;
    timeInterval.setDate(moreTime.getDate() - lessTime.getDate());
    days = timeInterval.getDate();
    timeInterval.setMonth(moreTime.getMonth() - lessTime.getMonth());
    months = timeInterval.getMonth();
    timeInterval.setFullYear(moreTime.getFullYear() - lessTime.getFullYear());
    years = timeInterval.getFullYear();
}

function setEnd(){
    days = String(days);
    months = String(months);
    years = String(years);
        
    if(days > 10 && days < 15) daysStr = 'дней';
    else if(days[days.length-1] == 1) daysStr = 'день';
    else if(days[days.length-1] >1 && days[days.length-1] <5) daysStr = 'дня';
    else daysStr = 'дней';
    
    if(months > 10) monthsStr = 'месяцев';
    else if(months[months.length-1] == 1) monthsStr = 'месяц';
    else if(months[months.length-1] >1 && months[months.length-1] <5) monthsStr = 'месяца';
    else monthsStr = 'месяцев';
    
    let yearsExcep = years[years.length-2] + years[years.length-1];
    
    if(yearsExcep > 10 && yearsExcep < 14) yearsStr = 'лет';
    else if(years[years.length-1] == 1) yearsStr = 'год';
    else if(years[years.length-1] >1 && years[years.length-1] <5) yearsStr = 'года';
    else yearsStr = 'лет';
}

checkTime();