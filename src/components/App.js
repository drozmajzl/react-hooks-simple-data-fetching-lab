import {react, useState, useEffect} from "react";

function App(){
    const[dog, setDog]=useState('')
    const[loaded, setLoaded]=useState(false)
    const image=<img src={dog} alt={"A Random Dog"}></img>
    const loading=<p>Loading</p>
  
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data=>{setDog(data.message)
            setLoaded(true)
        })
    },[])

    console.log(dog)

return (
    <div>
    {loaded ? image : loading}
    </div>
)
}

export default App;