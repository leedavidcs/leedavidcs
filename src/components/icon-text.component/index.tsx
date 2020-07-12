import clsx from "clsx";
import React, { FC } from "react";
import type { IconType } from "react-icons";
import classes from "./styles.module.scss";

interface IProps {
	className?: string;
	icon?: IconType;
	text: string;
}

export const IconText: FC<IProps> = ({ className, icon, text }) => {
	return (
		<div className={clsx(classes.root, className)}>
			{icon && React.createElement(icon, { className: classes.icon })}
			<span>{text}</span>
		</div>
	);
};
