const app = require('express')();
const PORT = 8080;

app.get('/timesTwo/:number',(req,res)=>{
    const input = req.params.number;
    const output = input*2;

    res.status(200).send({
        "output":output
    })

})


app.listen(PORT,
    ()=>console.log('Listen on localhost/'+PORT)
    )