import React, { FC } from "react";
import "./App.scss";
import { PdfDisplay } from "./components";
import { Resume } from "./page-parts";

export const App: FC = () => {
	return (
		<div className="appRoot">
			<PdfDisplay fileName="lee_david_resume.pdf">
				<Resume />
			</PdfDisplay>
		</div>
	);
};
