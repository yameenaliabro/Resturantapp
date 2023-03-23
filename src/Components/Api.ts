let promise = new Promise((resolve,reject)=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
})
export default promise;
