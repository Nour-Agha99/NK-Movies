const path =require("path");
const indexPage = (req, res) => {
    res.sendFile(path.join(dirname, "..", "public", "index.html"));
  }
const getAPI = (req,res)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b9da8a8928ade30c5680978edd9a4330&query=${req.params.value}`)
    .then((result)=> result.json())
    .then((result)=> res.send(result))
  };
const err404 =(req, res) => {
    res
      .status(404)
      .sendFile(path.join(__dirname, '..', '..','public', 'html', '404.html'));
  }
const err500 =(req, res) => {
    res
      .status(500)
      .sendFile(path.join(__dirname, '..', '..','public', 'html', '500.html'));
  }
module.exports = { indexPage,getAPI,err404,err500 }