1.
const myPromise = new Promise ((resolve, reject) => {
    const error = true;

    if(!error){
        resolve('Yes! resolve the promise!')
    } else {
        reject("No! rejected the promise")
    }
}) 


myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log(myPromise)








2. // Fetch An API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error))