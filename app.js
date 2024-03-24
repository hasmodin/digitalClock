setInterval(() => {
    // get time indicator elements 
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');

    //digits time indicator
    let hh = document.querySelector('#hh');
    let mm = document.querySelector('#mm');
    let ss = document.querySelector('#ss');

    // dot time indicator

    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');

    //get current time 
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';

    //convert to 12 hours format

    if(h > 12) {
        h = h -12;
    }

    //add 0 before single digit 
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    //set time and label

    hours.innerHTML = h + 'Hours';
    minutes.innerHTML = m + 'Minutes';
    seconds.innerHTML = s + 'Seconds';
    ampm.innerHTML = ap;

    //set time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * m) / 12;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //set dot time position indicator 
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotH.style.transform = `rotate(${m * 6}deg)`;
    dotH.style.transform = `rotate(${s * 6}deg)`;
}, 1000);