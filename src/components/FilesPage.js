import React, { useContext } from "react";
import { useState } from "react";
import { storage } from "../fireAuth";
import { currentUser } from "../AuthContext";
import { AppContext } from "../context/AppContext";
const FilesPage = () => {
	const [pdfUpload, setPdfUpload] = useState(null);

	// fetching data form context APi
	const {accountType, setAccountType}= useContext(AppContext);

	const uploadPdfData = () => {
		if (pdfUpload === null) {
			return;
		}
	};
	// fetching data form context Api
	const {formData, setFormData} = useContext(AppContext)
	console.log(formData);
	function changeHandler(event) {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	}

	return (
		// <div>
		// <input
		// 	type="file"
		// 	onChange={(event) => {
		// 		setPdfUpload(event.target.files[0]);
		// 	}}
		// />
		// <button onClick={uploadPdfData} className="bg-red-500s">
		// 	UploadPdf
		// </button>
		// </div>
		<div className="flex flex-col ">
			<div className="flex bg-background_color p-1 gap-x-1 my-6 rounded-full w-[300px] mx-auto justify-between mt-20">
				<button
					className={`${accountType === "student"
							? "bg-richblack-900 text-white"
							: "bg-transparent text-richblack-200"
						} py-2 px-5 rounded-full transition-all duration-500`}
					onClick={() => {
						setAccountType("student")
					}}
				>
					Choose file
					{/* {console.log(accountType)} */}
				</button>

				<button
					className={`${accountType === "instructor"
							? "bg-richblack-900 text-richblack-5"
							: "bg-transparent text-richblack-200"
						} py-2 px-5 rounded-full transition-all duration-500`}
					onClick={() => setAccountType("instructor")}
				>
					My File
					{/* {console.log(accountType)} */}
				</button>
			</div>

			{
				accountType==="student" &&
				<div className=" w-3/12  opacity-80   mx-auto flex rounded-md py-10 drop-shadow-2xl mt-16 bg-white">
				<form className="flex flex-col gap-y-4 ml-10">
					<label>
						<p className="text-black font-Mulish font-medium">Upload your Notes</p>
					</label>

					<div className="w-12/12 border-2 py-2 pl-2 rounded-md -mt-[5px]">
					<input
						type="file"
						onChange={(event) => {
							setPdfUpload(event.target.files[0]);
						}}
					/>
					</div>
					
					<label>
						<p className="text-black font-Mulish font-medium">Enter the subject notes name</p>
						
					</label>
					<select
							onChange={changeHandler}
							name="subject"
							value={formData.subject}
							id="subject"
							className="w-[300px] bg-background_color py-2 border-2 border-blue-200 rounded-md -mt-[5px] pl-2 "
						>
							<option value="java" className=" text-center ">
								Java
							</option>
							<option value="C++">C++</option>
							<option value="Sql">Sql</option>
						</select>

					<br></br>

					<button onClick={uploadPdfData} className="text-area-btn rounded-md  text-center p-2 bg-blue-500 text-white hover:bg-blue-800">
						Upload Pdf
					</button>
					
				</form>
			</div>
			}
			
			{/* Form Cretion */}
		</div>
	);
};

export default FilesPage;
