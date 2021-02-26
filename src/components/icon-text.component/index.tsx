import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	icon?: IconType;
	style?: CSSProperties;
	text?: ReactNode;
}

export const IconText: FC<IProps> = ({ children, className, icon, style, text }) => {
	return (
		<div className={clsx(classes.root, className)} style={style}>
			{icon &&
				React.createElement(icon, {
					className: classes.icon,
					size: 12,
					style: { fill: "currentColor", marginRight: 4 }
				})}
			{text || children}
		</div>
	);
};
