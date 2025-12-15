// promise

// https://fakestoreapi.com/products/1

fetch("https://fakestoreapi.com/products/")

.then((p)=>{
    

    return p.json()
})

.then((pureJs)=>{
  console.log(pureJs);
  let example = document.querySelector(".example");
 
  pureJs.forEach((c,i,t)=>{
    

    let newTag = document.createElement("div")

    newTag.innerHTML = `<h1>${c.title}</h1>
    <img src=${c.image}/>
    <p>${c.description.slice(0,100)+" ..."}</p>`

    example.append(newTag)
    
  })

  
})