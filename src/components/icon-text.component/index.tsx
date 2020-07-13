import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	icon?: IconType;
	text?: ReactNode;
}

export const IconText: FC<IProps> = ({ children, className, icon, text }) => {
	return (
		<div className={clsx(classes.root, className)}>
			{icon && React.createElement(icon, { className: classes.icon, size: 12 })}
			{text || children}
		</div>
	);
};
