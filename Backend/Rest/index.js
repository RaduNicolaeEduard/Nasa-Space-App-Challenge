const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('Api is running')
)

app.get('/nasa',(req,res)=>{
    res.status(200).send({
        nasa:'🚀',
        marin:'💥'
    })
})