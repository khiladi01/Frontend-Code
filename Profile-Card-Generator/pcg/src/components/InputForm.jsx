const InputForm = ({image , setImage, name , setName , job , setJob , link , setLink , bio , setBio }) => {

    // When User Upload Pic to Base64 It Will Save It

    const ImageUpload = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result;
                setImage(base64String);
                localStorage.setItem("profileImage",base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form Submitted");
        console.log({ image, name, job, link , bio });
      };

      const cardMessage = () => {
        alert("Card Generated Successfully");
      }

    return (
       <div className='space-y-4'>
                <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                type="file"
                onChange={(ImageUpload)} 
                className='w-full border-0 rounded-lg p-2 shadow-custom mt-3 px-4 bg-transparent text-red-500 font-medium'
                />
                <input 
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => 
                setName(e.target.value)}
                className='w-full border-0 rounded-lg p-2 bg-transparent text-white font-medium shadow-custom mt-3 px-4'
                />
                <input 
                type="text"
                placeholder="Your Profession"
                value={job}
                onChange={(e) => 
                setJob(e.target.value)}
                className='w-full border-0 rounded-lg p-2 bg-transparent text-white font-medium shadow-custom mt-3 px-4'
                />
                <input 
                type="text" 
                placeholder="Your Social Link"
                value={link}
                onChange={(e) =>
                setLink(e.target.value)}
                className='w-full border-0 rounded-lg p-2 bg-transparent text-white font-medium shadow-custom mt-3 px-4'
                />
                <input 
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(e) => 
                setBio(e.target.value)}
                className='w-full border-0 rounded-lg p-2 bg-transparent text-white font-medium shadow-custom mt-3 px-4'
                />
                <input 
                type="submit"
                value={"Generate Card"}
                onClick={cardMessage}
                className='w-full border-0 rounded-lg p-2 shadow-custom text-red-200 font-medium hover:text-red-400 cursor-pointer mt-3 bg-slate-800 hover:bg-slate-900 transition duration-500'
                />
                </form>
       </div>
    )
}
export default InputForm;