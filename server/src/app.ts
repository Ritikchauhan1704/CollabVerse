import { Hono } from "hono";
import { logger } from 'hono/logger'

const app=new Hono()
app.use(logger())

app.get("/",c=>{
    return c.json({"hello":"world"})
})

export default {  
    port: process.env.PORT||8080, 
    fetch: app.fetch, 
  } 