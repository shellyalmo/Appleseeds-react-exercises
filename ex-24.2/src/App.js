import useFetch from "./hooks/useFetch";

export default function App() {
  const BASE_URL1 = "https://inshortsapi.vercel.app/news?category=all";
  const BASE_URL2 = "https://restcountries.com/v3.1/all";

  const {
    users: data1,
    loading: loading1,
    error: error1,
  } = useFetch(BASE_URL1);
  const {
    users: data2,
    loading: loading2,
    error: error2,
  } = useFetch(BASE_URL2);
  return (
    <div>
      <div>
        {loading1 && <h3>loading...</h3>}
        {error1 && <h3>Error: something went wrong </h3>}
        <div>
          <pre>{JSON.stringify(data1, undefined, 2)}</pre>
        </div>
      </div>
      <div>
        {loading2 && <h3>loading...</h3>}
        {error2 && <h3>Error: something went wrong </h3>}
        <div>
          <pre>{JSON.stringify(data2, undefined, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
