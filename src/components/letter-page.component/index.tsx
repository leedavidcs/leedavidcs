import clsx from "clsx";
import React, { CSSProperties, forwardRef, ReactNode } from "react";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const LetterPage = forwardRef<HTMLDivElement, IProps>(
	({ children, className, style }, ref) => {
		return (
			<div className={clsx(classes.root, className)} style={style} ref={ref}>
				{children}
			</div>
		);
	}
);

LetterPage.displayName = "LetterPage";
