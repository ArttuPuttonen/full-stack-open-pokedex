const express = require('express') 
const app = express()


const PORT = process.env.PORT || 5001

app.use(express.static('dist'))
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) 
}) 