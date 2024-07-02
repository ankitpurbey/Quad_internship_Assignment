const url ="https://api.wazirx.com/api/v2/tickers";
const getData = async()=>{
    console.log("getting data...");
    let response = await fetch(url);
    console.log(response);
    
}
document.getElementById('theme-toggle').addEventListener('click', function() {
    let themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === 'styles-light.css') {
        themeLink.setAttribute('href', 'styles-dark.css');
    } else {
        themeLink.setAttribute('href', 'styles-light.css');
    }
});
