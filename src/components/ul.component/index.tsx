import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
}

export const Ul: FC<IProps> = ({ children, className }) => {
	return <ul className={clsx(classes.root, className)}>{children}</ul>;
};
