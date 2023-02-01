import app from './src/app'
import './src/database'
import { PORT } from './src/config/config'

app.listen(PORT)
console.log(`server on port ${PORT}`)
