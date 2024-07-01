const url ="https://api.wazirx.com/api/v2/tickers";
const getData = async()=>{
    console.log("getting data...");
    let response = await fetch(url);
    console.log(response);
    
}
