(async () => { 

    console.log('Hello from the index.js file row 3')
    const movies = await fetch('https://localhost:7134/api/Videos')
    console.log(movies)

 })();

 