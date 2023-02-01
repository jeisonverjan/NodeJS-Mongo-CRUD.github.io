import express from 'express'
import { engine } from 'express-handlebars'
import indexRoutes from './routes/index.routes'
import path from 'path'
import morgan from 'morgan'

// app definition
const app = express()

// app Settings
app.set("views", path.join(__dirname, 'views'))
app.engine('hbs', engine({
    extname: "hbs"
}));
app.set('view engine', 'hbs');

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

// Routes
app.use(indexRoutes)

// Static Files
app.use(express.static(path.join(__dirname, 'static')))


export default app