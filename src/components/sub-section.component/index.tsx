import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import classes from "./styles.module.scss";

interface IProps {
	children: ReactNode;
	className?: string;
	info?: string;
	title: string;
}

export const SubSection: FC<IProps> = ({ children, className, info, title }) => {
	return (
		<div className={clsx(classes.root, className)}>
			<h3 className={classes.header}>
				<strong className={classes.title}>{title}</strong>
				<span className={classes.info}>{info}</span>
			</h3>
			{children}
		</div>
	);
};
