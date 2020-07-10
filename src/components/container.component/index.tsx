import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";
import { Column } from "./column.component";
import classes from "./styles.module.scss";

const DEFAULT_COLUMN_GAP = 12;

interface IProps {
	children: ReactNode;
	className?: string;
	columnGap?: number;
	style?: CSSProperties;
}

interface IWithStaticProps {
	Column: typeof Column;
}

const _Container: FC<IProps> = ({ children, className, columnGap = DEFAULT_COLUMN_GAP }) => {
	return (
		<div className={clsx(classes.root, className)} style={{ columnGap }}>
			{children}
		</div>
	);
};

(_Container as FC<IProps> & IWithStaticProps).Column = Column;

export const Container = _Container as FC<IProps> & IWithStaticProps;
