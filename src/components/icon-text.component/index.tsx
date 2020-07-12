import clsx from "clsx";
import React, { FC, ReactElement } from "react";
import type { IconType } from "react-icons";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactElement;
	className?: string;
	icon?: IconType;
	text?: ReactElement;
}

export const IconText: FC<IProps> = ({ children, className, icon, text }) => {
	return (
		<div className={clsx(classes.root, className)}>
			{icon && React.createElement(icon, { className: classes.icon })}
			{text || children}
		</div>
	);
};
