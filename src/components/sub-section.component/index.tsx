import { IconText } from "@/components/icon-text.component";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { FaCalendar, FaMapMarker } from "react-icons/fa";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	locationInfo?: string;
	subheader?: string;
	timeInfo?: string;
	title: ReactNode;
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
			<h3 className={classes.header}>
				<strong>{title}</strong>
			</h3>
			<h4 className={classes.subheader}>
				<strong className={classes.subheaderTitle}>{subheader}</strong>
				{timeInfo && <IconText icon={FaCalendar} text={timeInfo} />}
				{locationInfo && <IconText icon={FaMapMarker} text={locationInfo} />}
			</h4>
			{children}
		</section>
	);
};
