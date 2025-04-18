import { useEffect, useState } from "react";
import Card from "./components/Card";
import InputForm from "./components/InputForm";

function App() {
    const [image , setImage] = useState("");
    const [name , setName] = useState("");
    const [job , setJob] = useState("");
    const [link , setLink] = useState("");
    const [bio , setBio] = useState("");

    useEffect(() => {
      const storeImage = localStorage.getItem("profileImage");
      if(storeImage)
        setImage(storeImage)

    },[]);

  return (
    <>
    <div className=" min-h-16 bg-gray-700 grid place-content-center shadow-custom">
    <h1 className="text-3xl text-slate-300 font-bold text-center">Profile Card Generator</h1>
    </div>
    <div className="min-h-screen bg-gray-600 p-4 grid place-content-center">
      <div className="grid md:grid-cols-2 gap-8">
        <InputForm image={image} setImage={setImage} name={name} setName={setName} job={job} setJob={setJob} link={link} setLink={setLink} bio={bio} setBio={setBio} />

        <Card image={image} name={name} job={job} link={link} bio={bio}  />

      </div>    
    </div>
    <div className="h-16 text-xl font-semibold text-gray-300 bg-gray-700 grid place-content-center ">
      <p>Thanks For Using</p>
    </div>

    <div className="text-xl font-semibold text-red-400 bg-gray-700 grid place-content-center h-16">
    <p>Created And Design By Er'Raushan Raj</p>
    </div>
    </>
  );
}

export default App;
