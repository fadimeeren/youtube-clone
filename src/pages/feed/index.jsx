import {useEffect, useState} from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../component/loader/skeleton-loader";
const Feed = () => {
  const [data, setData] = useState([])
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(true)

  //sayfa yüklenince
  useEffect(()=> {
    setLoading(true)

    api
    .get("/home")
    .then((res) => setData(res.data.data))
    .catch((err) => setError(error.message))
    .finally(() => setLoading(false))
  },[]);

// veriyi kategorize et
data.filter((item) => item.type)
console.log(data)



if(loading) return <SkeletonLoader/>
if (error) return <Error message={error}/>
return <div className="page"> </div>


  return (
    <div>feed</div>
  )
};


export default Feed;