import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import classes from "./styles.module.scss";

interface IProps {
	children: ReactNode;
	className?: string;
	icon?: IconType;
	title: string;
}

export const Section: FC<IProps> = ({ children, className, icon, title }) => {
	return (
		<section className={clsx(classes.root, className)}>
			<div className={classes.header}>
				{icon && React.createElement(icon)}
				<h2 className={classes.title}>{title}</h2>
			</div>
			{children}
		</section>
	);
};
