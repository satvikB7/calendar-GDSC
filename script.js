const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const calendarContainer = document.getElementById('calendar');
const eventDetailsContainer = document.getElementById('eventDetails');
const eventDateDetail = document.getElementById('eventDateDetail');
const eventTitleDetail = document.getElementById('eventTitleDetail');

let events = [
    { date: '2023-12-24', title: 'Christmas'},
    { date: '2023-12-31', title: 'New year 2024'},
    { date: '2022-12-24', title: 'Christmas'},
    { date: '2022-12-31', title: 'New year 2023'},
    { date: '2021-12-24', title: 'Christmas'},
    { date: '2021-12-31', title: 'New year 2022'},
    { date: '2020-12-24', title: 'Christmas'},
    { date: '2020-12-31', title: 'New year 2021'},
    { date: '2024-12-24', title: 'Christmas'},
    { date: '2024-12-31', title: 'New year 2025'},
    { date: '2025-12-24', title: 'Christmas'},
    { date: '2025-12-31', title: 'New year 2026'},
    { date: '2026-12-24', title: 'Christmas'},
    { date: '2019-12-31', title: 'New year 2020' },
    { date: '2021-01-13', title: 'Sankranti'},
    { date: '2022-01-13', title: 'Sankranti'},
    { date: '2023-01-14', title: 'Sankranti'},
    { date: '2024-01-13', title: 'Sankranti'},
    { date: '2025-01-13', title: 'Sankranti'},
    { date: '2026-01-13', title: 'Sankranti'},
    { date: '2020-08-14', title: 'Independence Day'},
    { date: '2021-08-14', title: 'Independence Day'},
    { date: '2022-08-14', title: 'Independence Day'},
    { date: '2023-08-14', title: 'Independence Day'},
    { date: '2024-08-14', title: 'Independence Day'},
    { date: '2025-08-14', title: 'Independence Day' },
    { date: '2026-08-14', title: 'Independence Day'},
    { date: '2020-10-24', title: 'Dussehra'},
    { date: '2021-10-14', title: 'Dussehra'},
    { date: '2022-10-04', title: 'Dussehra'},
    { date: '2023-10-22', title: 'Dussehra'},
    { date: '2024-10-11', title: 'Dussehra'},
    { date: '2025-10-01', title: 'Dussehra'},
    { date: '2026-10-19', title: 'Dussehra'},
    { date: '2020-11-13', title: 'Diwali'},
    { date: '2021-11-03', title: 'Diwali'},
    { date: '2022-10-23', title: 'Diwali'},
    { date: '2023-11-11', title: 'Diwali'},
    { date: '2024-10-27', title: 'Diwali'},
    { date: '2025-10-19', title: 'Diwali'},
    { date: '2026-11-07', title: 'Diwali'},
    { date: '2020-03-09', title: 'Holi 2020'},
    { date: '2021-03-28', title: 'Holi 2021'},
    { date: '2022-03-17', title: 'Holi 2022'},
    { date: '2023-03-07', title: 'Holi 2023'},
    { date: '2024-03-24', title: 'Holi 2024'},
    { date: '2025-03-13', title: 'Holi 2025'},
    { date: '2026-03-03', title: 'Holi 2026'},
    { date: '2020-02-25', title: 'Republic Day 2020'},
    { date: '2021-02-25', title: 'Republic Day 2021'},
    { date: '2022-02-25', title: 'Republic Day 2022'},
    { date: '2023-02-25', title: 'Republic Day 2023' },
    { date: '2024-02-25', title: 'Republic Day 2024' },
    { date: '2025-02-25', title: 'Republic Day 2025'},
    { date: '2026-02-25', title: 'Republic Day 2026'},
    { date: '2020-08-21', title: 'Ganesh Chaturthi 2020'},
    { date: '2021-09-09', title: 'Ganesh Chaturthi 2021'},
    { date: '2022-08-30', title: 'Ganesh Chaturthi 2022'},
    { date: '2023-09-18', title: 'Ganesh Chaturthi 2023'},
    { date: '2024-09-06', title: 'Ganesh Chaturthi 2024'},
    { date: '2025-08-26', title: 'Ganesh Chaturthi 2025' },
    { date: '2026-09-13', title: 'Ganesh Chaturthi 2026' },
    
]

let availableKeywords = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    'Ganesh Chaturthi',
    'Diwali',
    'Dussehra',
    'New year',
    'Republic Day',
    'Holi',
    'Independence Day',
    'Christmas',
    'Ganesh Chaturthi 2020',
    'Republic Day 2020',
    'Holi 2020',
    'Happy new year 2020',

];

let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000);


const resultsBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML='';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li>" + list + "<li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML='';
}
function populateMonths() {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

function populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 3; year <= currentYear + 3; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

function daysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}

function updateCalendar() {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    const days = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();

    let calendarHTML = '<div class="day-header">Sun</div><div class="day-header">Mon</div><div class="day-header">Tue</div><div class="day-header">Wed</div><div class="day-header">Thu</div><div class="day-header">Fri</div><div class="day-header">Sat</div>';

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div class="day"></div>';
    }

    for (let i = 1; i <= days; i++) {
        calendarHTML += `<div class="day">${i}</div>`;
    }

    calendarContainer.innerHTML = calendarHTML;
}

function showEventDetails(date) {
   const formattedDate = date.toISOString().split('T')[0];
   const event = events.find(event => event.date === formattedDate);
   if (event) {
       eventDateDetail.textContent = `Date: ${date.toDateString()}`;
       eventTitleDetail.textContent = `${event.title}`; 
       eventDetailsContainer.style.display = 'block';
       
   } else {
       hideEventDetails();
   }
    
}
function hideEventDetails() {
    eventDetailsContainer.style.display = 'none';
}

populateMonths();
populateYears();
updateCalendar();

calendarContainer.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('day')) {
        const day = parseInt(clickedElement.innerText);
        const month = monthSelect.value;
        const year = yearSelect.value;
        const date = new Date(year, month, day);
        showEventDetails(date);
    }
    
});

eventDetailsContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        hideEventDetails();
    }
});
document.getElementById('showFormLink').addEventListener('click', function(event) {
    event.preventDefault();
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.style.display = registrationForm.style.display === 'none' ? 'block' : 'none';
});