import html2canvas from "html2canvas";

const Card = ({image, name , job , link , bio  }) => {

    const carddownload = async () => {
        const cardElement = document.getElementById("card");
        if(!cardElement){
           alert("Card Not Found");
           return ;
        }
        const canvas = await html2canvas(cardElement , {
            useCORS: true,
            scale: 2,
        });
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "profile-card.png";
        link.click();
    };
    
    return (
        <div>
          <div id="card" className="max-w-sm mx-auto bg-slate-300 rounded-2xl overflow-hidden p-6 grid place-content-center shadow-custom bg-transparent">

            <div className="flex justify-center items-center h-28 w-28 border-slate-600 border-2 rounded-full bg-transparent shadow-custom">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="mt-0 h-28 w-28 border rounded-full"
                />
              ) : (
                <div className="mt-4 max-h-screen max-w-screen-sm border rounded-lg text-center bg-gray-500">
                  Image Not Selected
                </div>
              )}
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-50">{name || "Your Name"}</h2>
            <h3 className="mt-4 text-base font-medium text-slate-50">{job || "Profession"}</h3>
            <h3 className="mt-4 text-base font-medium text-slate-50">{link || "Social Link"}</h3>
            <p className="mt-4 text-sm font-medium text-slate-50">{bio || "Bio"}</p>
          </div>

          <div className="min-h-10 text-center mt-4">
         <button
            onClick={carddownload} 
            className="mt-4 bg-gray-700 text-red-400 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-red-500 transition duration-300"
          >
            Download Card
          </button>
         </div>

        </div>
      );
    };

    export default Card;