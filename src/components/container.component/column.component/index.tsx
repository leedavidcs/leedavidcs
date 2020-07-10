import React, { CSSProperties, FC, ReactNode } from "react";

interface IProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const Column: FC<IProps> = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};
