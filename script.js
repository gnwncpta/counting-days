const countDays = document.querySelector('.count');
const dayH1 = document.querySelector('h1');
const dateDays = document.querySelector('.date');

const inputValue = document.getElementById('input');
const buttonCount = document.getElementById('count');
const buttonReset = document.getElementById('reset');

const processDate = (val) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date();
    const dateNow = date.getDate();
    date.setDate(dateNow + val);

    // console.log(`${val} Hari setelah hari ini adalah ${date}`);

    const hari = day[date.getDay()];
    const tanggal = date.getDate();
    const bulan = month[date.getMonth()];
    const tahun = date.getFullYear();
    
    dayH1.innerHTML = hari;
    dateDays.innerHTML = `${tanggal} ${bulan} ${tahun}`;
}

buttonCount.addEventListener('click', function(){
    const val = parseInt(inputValue.value);
    if(val == NaN){
        countDays.innerHTML = '-';
    } else if(val != NaN){
        countDays.innerHTML = val;
    }
    processDate(val);
});

buttonReset.addEventListener('click', function(){
    inputValue.value = ' ';
})