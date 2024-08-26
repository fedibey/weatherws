writeDate=()=>{
var getcurrentdate= new Date()
var day = getcurrentdate.getDay()
var month= getcurrentdate.getMonth()
var year = getcurrentdate.getUTCFullYear()
var nhar = getcurrentdate.getUTCDate()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
return `${t[day]}, ${nhar} ${months[month].slice(0,3)} ${year}`
}

const date = document.querySelector('.date')
date.innerText=writeDate()




const consomationAPI = async()=>{
    try {
        const resp = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Tunisia,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
        const respJ = await resp.json()
        const temp = document.querySelector('#temp')
        temp.innerText = Math.trunc(respJ.main.temp-273)
        console.log(respJ)

    } catch (error) {
        console.log(error)
    }
}
consomationAPI()


const consommationNEWS=async()=>{
    try {
        const res =await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=21508358eb0e4b6c8806d08f0742d454')
        const resJSON = await res.json()
        const articlesTable=resJSON.articles
        console.log(articlesTable)
        const news = document.querySelector('#news')
        for(let i=0;i<articlesTable.length;i++){
            const newDiv=document.createElement('div')
            const newTitle=document.createElement('h4')
            newTitle.innerText=articlesTable[i].title
            const newPar=document.createElement('p')
            newPar.innerText=articlesTable[i].content
    
    
            newDiv.appendChild(newTitle)
            newDiv.appendChild(newPar)
            news.appendChild(newDiv)
    
    
        }
    } catch (error) {
        console.log(error)
    }
    
    }
    
    consommationNEWS()