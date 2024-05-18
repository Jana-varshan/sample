const form=document.querySelector("#search_box");

form.addEventListener('submit', async function(e){
    const data=await api(e);


})

const api=async function(g){
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${g}`)
    return res.data
}

const poster=function(cont){
    const div=document.querySelector("#movie")
    const h1=document.createElement("h1")
    const img=document.createElement("img")


}
