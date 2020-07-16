import { ReactComponent as Logo } from "@/assets/react-logo.svg";
import clsx from "clsx";
import React, { CSSProperties, FC } from "react";
import classes from "./styles.module.scss";

const DEFAULT_LOGO_SIZE = 128;

interface IProps {
	className?: string;
	size?: number;
	style?: CSSProperties;
}

export const Spinner: FC<IProps> = ({ className, size = DEFAULT_LOGO_SIZE, style }) => {
	return (
		<div className={clsx(classes.root, className)} style={style}>
			<Logo height={size} width={size} />
		</div>
	);
};
