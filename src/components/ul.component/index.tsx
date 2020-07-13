import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { Li } from "./li.component";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
}

interface IWithStaticProps {
	Li: typeof Li;
}

const _Ul: FC<IProps> = ({ children, className }) => {
	return <ul className={clsx(classes.root, className)}>{children}</ul>;
};

(_Ul as FC<IProps> & IWithStaticProps).Li = Li;

export const Ul = _Ul as FC<IProps> & IWithStaticProps;
