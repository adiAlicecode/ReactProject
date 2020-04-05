const {Client}=require('pg')

const client =new Client({
    user:"iktjuquyhxqeul",
    password:'3474b561c23cd627e7242d6fdcdb013b27129fefd6223274ffdec8c6ef2a0253',
    host:'ec2-54-88-130-244.compute-1.amazonaws.com',
    port:5432,
    database:'d8htite9bt2ns4'
})

client.connect()
.then(()=>console.log("Connected successfuly"))
.catch(e=>console.log)
.finally(()=>client.end())