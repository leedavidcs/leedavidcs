declare module "react-to-pdf" {
	import React, { MouseEventHandler, RefObject } from "react";
	import {} from "jspdf";

	interface ReactToPdfProps {
		children: (params: {
			toPdf: MouseEventHandler<HTMLElement>;
			targetRef: RefObject<HTMLElement | null>;
		}) => React.ReactElement;
		filename?: string;
		targetRef?: RefObject<HTMLElement>;
		x?: number;
		y?: number;
		options?: any;
		onComplete?: () => void;
	}

	const ReactToPdf: React.FC<ReactToPdfProps>;
	
	export default ReactToPdf;
}
