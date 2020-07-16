import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const WindowCover: FC<IProps> = ({ children, className, style }) => {
	return (
		<div className={clsx(classes.root, className)} style={style}>
			{children}
		</div>
	);
};
