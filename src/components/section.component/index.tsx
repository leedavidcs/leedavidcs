import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import classes from "./styles.scss";

interface IProps {
	children: ReactNode;
	className?: string;
	icon?: ReactNode;
	title: string;
}

export const Section: FC<IProps> = ({ children, className, icon, title }) => {
	return (
		<section className={clsx(classes.root, className)}>
			<div className={classes.heading}>
				<div>{icon}</div>
				<h2 className={classes.title}>{title}</h2>
			</div>
			{children}
		</section>
	);
};
