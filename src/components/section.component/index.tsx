import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import styles from "./styles.module.scss";

interface IProps {
	children: ReactNode;
	className?: string;
	icon?: IconType;
	title: string;
}

export const Section: FC<IProps> = ({ children, className, icon, title }) => {
	console.log(styles);

	return (
		<section className={clsx(styles.root, className)}>
			<div className={styles.heading}>
				{icon && React.createElement(icon)}
				<h2 className={styles.title}>{title}</h2>
			</div>
			{children}
		</section>
	);
};
