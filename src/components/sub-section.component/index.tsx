import { IconText } from "@/components/icon-text.component";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	locationInfo?: ReactNode;
	subheader?: ReactNode;
	timeInfo?: ReactNode;
	title?: ReactNode;
}

export const SubSection: FC<IProps> = ({
	children,
	className,
	locationInfo,
	subheader,
	timeInfo,
	title
}) => {
	return (
		<section className={clsx(classes.root, className)}>
			{title && <h3 className={classes.header}>{title}</h3>}
			{subheader && <h4 className={classes.subheader}>{subheader}</h4>}
			{(timeInfo || locationInfo) && (
				<div className={classes.info}>
					{timeInfo && <IconText icon={FaCalendarAlt} text={timeInfo} />}
					{locationInfo && <IconText icon={FaMapMarker} text={locationInfo} />}
				</div>
			)}
			{children}
		</section>
	);
};
