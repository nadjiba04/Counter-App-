function totalClick(click){
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue =  parseInt(totalClicks.innerText) + click;
    // console.log (sumvalue + click);
    totalClicks.innerText = sumvalue;

    if(click === 0 )  {
        totalClicks.innerText = 0 ;
    }
}