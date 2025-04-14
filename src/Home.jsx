import ProfileCard from "./ProfileCard"
import ResumeCard from "./ResumeCard"

const Home = () => {

return(
<div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4 py-12">
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-slate-100 rounded-lg shadow-md p-6">
      <ProfileCard />
    </div>
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <ResumeCard />
    </div>
  </div>
</div>
)

}
export default Home;
