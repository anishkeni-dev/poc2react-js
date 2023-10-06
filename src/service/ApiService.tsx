
const url = 'https://api.punkapi.com/v2/beers';


async function getData(){
    var apiData = await fetch(url,{method:"GET"})
     .then((response) => response.json())
     .then((data) => {
        return data;
     })
     .catch((err) => {
         return console.log(err.message);
     });

     if(apiData.length!=0)
     {
        return apiData;
     }
     return console.log("something went wrong!")
      
 }
export async function getDataByIdfromApi(id:string){
    var apiData = await fetch(url,{method:"GET"})
     .then((response) => response.json())
     .then((data) => {
        return data;
     })
     .catch((err) => {
         return console.log(err.message);
     });
    for(var i=0; i<apiData.length;i++)
    {
     if(apiData.length!=0 && apiData[i]['id']==id)
     {
        console.log(apiData[i]['id']);
        return apiData[i];
     }
    }
     return console.log("something went wrong!")
      
 }

 export default getData;
