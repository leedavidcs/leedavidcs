import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
}

export const Li: FC<IProps> = ({ children, className }) => {
	return (
		<li className={clsx(classes.root, className)}>
			<div>{children}</div>
		</li>
	);
};
