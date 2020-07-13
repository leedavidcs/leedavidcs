import React, { FC, ReactElement, useRef } from "react";
import ReactPdf from "react-to-pdf";
import classes from "./styles.module.scss";

const LETTER_PAPER_HEIGHT = 11;
const LETTER_PAPER_WIDTH = 8.5;
/**
 * !HACK
 * @description No idea why inches are not being represented correctly, but stackoverflow states to
 *     multiply inches value by 72.
 * @date July 12, 2020
 * @author David Lee
 * @see (@link https://stackoverflow.com/a/59504239/9074275)
 */
const TO_INCH_CONVERSION = 72;

interface IProps {
	children: ReactElement;
	className?: string;
	fileName: string;
	onComplete?: () => void;
}

export const PdfDisplay: FC<IProps> = ({ children, className, fileName, onComplete }) => {
	const sourceRef = useRef<HTMLDivElement>(null);

	return (
		<div className={className}>
			<div className={classes.controlContainer}>
				<ReactPdf
					filename={fileName}
					onComplete={onComplete}
					options={{
						unit: "in",
						format: [
							LETTER_PAPER_WIDTH * TO_INCH_CONVERSION,
							LETTER_PAPER_HEIGHT * TO_INCH_CONVERSION
						]
					}}
					targetRef={sourceRef}
				>
					{({ toPdf }) => (
						<button className={classes.downloadBtn} onClick={toPdf} type="button">
							Download Resume
						</button>
					)}
				</ReactPdf>
			</div>
			<div className={classes.sourceContainer}>
				{React.cloneElement(children, { ref: sourceRef })}
			</div>
		</div>
	);
};
