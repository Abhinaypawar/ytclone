import { useAuth } from "../context/AuthProvider";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";

function Home() {
  const { data,loading } = useAuth();
  console.log(data)


  return (
    <div className="flex">
      <Sidebar />
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data?.
            contents
            .map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video}></Video>;
            })}
        </div>
       
      </div>
    </div>
  )
}
export default Home;