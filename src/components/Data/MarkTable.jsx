import { useQuery } from "react-query";
import { ReactTabulator } from "react-tabulator";
import { get_student_performance } from "./server/Fetch";
const options = {
  height: "80%",
  pagination: true,
  paginationSize: 10,
  paginationSizeSelector: [5, 10, 20, 50, 100, 150, 200, 500],
  layout: "fitColumns",
  responsiveLayout: "collapse",
};

const dataColumns =  (data) => {
  if(!Array.isArray(data)) return null 
  const cols = Object.keys(data[0])
  return cols.map(col => ({title: col, field: col }))
}

function MarkTable() {

  const {isLoading, isFetching, error, data:performance } = useQuery(
    "performance",
    get_student_performance,
    {
      cacheTime:500000
    }
  )


  
/*
  const [loading, setLoading] = useState(true)
  const [tabledata, setTableData] = useState([{}])
  useEffect(()=>{
    let ignore = false
    async function fetchData (){
      const response = await get_student_performance()
      const tabulatorData = response.data ? response.data : [{}]

      if(!ignore){
        setTableData(tabulatorData)

        setLoading(false)
      }
    }

    fetchData()
    return () =>{ ignore =true }
  },[])

*/

console.log({isLoading, isFetching})
  
 


  return (
    <>{
      isLoading 
        ? <h1>Loading </h1>
        : <ReactTabulator data={performance.data} columns={dataColumns(performance.data)} options={options} />
    }
      
    </>
  );
}

export default MarkTable