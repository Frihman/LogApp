document.onload = logAddedCheck();

function logAddedCheck() {
    if (document.getElementById('logAddedCheck').innerHTML.indexOf('true') !== -1) {
        document.getElementById('logAdded').style.display = 'block';
    }
}