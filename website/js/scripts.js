// Function to show logo information panel
function showLogoInfo(logoId) {
    var logoInfo = document.getElementById(logoId + '-info');
    if (logoInfo) {
        logoInfo.style.display = 'block';
    }
}

// Function to hide logo information panel
function hideLogoInfo(logoId) {
    var logoInfo = document.getElementById(logoId + '-info');
    if (logoInfo) {
        logoInfo.style.display = 'none';
    }
}

window.onload = function() {
    var audio = document.getElementById("backgroundMusic");
    audio.play();
}