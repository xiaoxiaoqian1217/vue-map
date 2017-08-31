export default function removeLoad(url,hasCallback){
	console.log(1);
    var scriptElement = document.createElement('script')
    document.body.appendChild(scriptElement)
    var promise = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', e => {
  
        if (!hasCallback) {
          resolve(e)
        }
      }, false)

      scriptElement.addEventListener('error', e => {
        reject(e)
      }, false);


  scriptElement.src = url

})

       return promise
}