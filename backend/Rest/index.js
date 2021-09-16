const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('ITS ALIVE')
)

app.get('/nasa',(req,res)=>{
    res.status(200).send({
        nasa:'🚀',
        marin:'💥'
    })
})