import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    // queue.add('paint', { color: 'blue' })
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
