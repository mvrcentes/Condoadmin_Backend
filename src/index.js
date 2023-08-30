import app from './app.js'

const PORT = 4000

const main = async () => {
    await app.listen(PORT)
    console.log(`Server running on port ${PORT}`)
}

main()

