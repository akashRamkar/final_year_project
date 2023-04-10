import React from "react";
import { useState } from "react";
import { storage } from "../fireAuth";
import { currentUser } from "../AuthContext";
const FilesPage = () => {
	const [pdfUpload, setPdfUpload] = useState(null);

	const uploadPdfData = () => {
		if (pdfUpload === null) {
			return;
		}
	};

	return (
		<div>
			<input
				type="file"
				onChange={(event) => {
					setPdfUpload(event.target.files[0]);
				}}
			/>
			<button onClick={uploadPdfData} className="bg-red-500s">
				UploadPdf
			</button>
		</div>
	);
};

export default FilesPage;
