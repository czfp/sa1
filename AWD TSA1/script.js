let changeCount = 0;
function changeColor() {
    const resume = document.getElementById('resume');
    
    if (changeCount == 0) {
        resume.style.backgroundColor = '#00FFFF';
        resume.style.color = '#333';
    } else if (changeCount == 1) {
        resume.style.backgroundColor = '#7FFF00';
        resume.style.color = '#333';
    } else {
        resume.style.backgroundColor = '#faeaef';
        resume.style.color = '#333';
        changeCount = -1;
    }
    changeCount++;
}