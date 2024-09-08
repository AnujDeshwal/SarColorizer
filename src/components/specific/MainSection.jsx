import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { categoryTypes } from "../../utils/data";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import BoxComp from "./BoxComp";
import { server } from "../../utils/server";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeImage, storeInp } from "../../redux/main.reducer";
const defaultUrl =
  "https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-gallery-vector-icon-png-image_470660.jpg";


const MainSection = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(-1);
  const [url, setUrl] = useState(defaultUrl);
  const [geo , setGeo] = useState("");
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if(url == defaultUrl ){
        toast.error("Please choose a image");
        return ;
    }
    else if(category == -1){
      toast.error("Please choose a category");return ;}
      console.log("this is url:"  , url)
    dispatch(storeInp(url));
    const toastId = toast.loading("Colorizing...");
    const formData = new FormData();
    formData.append("geo", geo);
    formData.append("category", category);
    const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json",
        },
      };

      axios.post(`${server}/main` , formData , config)
      .then(({data}) => {
        dispatch(storeImage(data.geo))
        toast.success(
          "SAR image enhanced successfully",
          {
            id:toastId
          }
        )
        navigate('/output');
      })
      .catch((err) =>{
        toast.error(
         err?.response?.data?.message  || "Something went wrong ",
          {
            id:toastId
          }
        )
        })
       };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setGeo(file);
    const reader = new FileReader();
    //here onLoad is like when image will fully readed by the fileReader then only .onload will work
    reader.onload = function (event) {
      const ImageUrl = event.target?.result;
      console.log("Input"+ImageUrl)
      setUrl(ImageUrl);
    };
    // When you call readAsDataURL(blob), the FileReader starts reading the contents of the specified file asynchronously. Once the reading operation is complete, the load event is triggered, and you can access the data URL representing the file's contents from the result property of the FileReader object.
    reader.readAsDataURL(file);
  };
  return (
    <div className="flex text-white bg-black w-[100vw] h-[100vh] px-[4rem]">
      <div className="w-[100%] bg-center bg-cover  h-[97%] bg-[url('./grassland.jpg')]"></div>
      <div className="flex flex-col mt-[7rem] items-center gap-[1rem] ">
        {" "}
        <h1 className="text-[2.2rem] text-center px-[6rem] text-[#F03658]">
          AI SAR's photo colorizer , in one click
        </h1>
        <h1 className="text-[0.9rem] text-center  px-[8rem]">
          GeoTint enhances your grayscale SAR images by adding vibrant colors
          and elevating detail, instantly transforming them into vivid,
          high-definition visuals.
        </h1>
        <div className="border-gray-400 flex flex-col items-center rounded-2xl border-dashed border-[1px] w-[33rem] h-[18rem] px-[2rem]">
          <div className="flex">
            <div
              onClick={(e) => fileInputRef.current.click()}
              className="flex justify-center cursor-pointer   gap-[1rem] m-[2rem] rounded-full items-center h-[3rem] w-[13rem] bg-[#F03658]"
            >
              <h1>Choose files</h1>
              <MdOutlineFileUpload className="text-2xl" />
              <input
                required
                ref={fileInputRef}
                onChange={handleFileInputChange}
                type="file"
                className="hidden"
              />
            </div>
            <div
            className={` m-auto rounded-full w-[4em] h-[4em] `}
            style={{
              backgroundImage: ` url("${url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          </div>
          <BoxComp
            category={category}
            setCategory={setCategory}
            title="Category"
            options={categoryTypes}
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-black rounded-full w-[7rem] mt-[2rem] active:scale-75 transition-all ease-in-out duration-700 h-[2.5rem] "
          >
            Enhance
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
