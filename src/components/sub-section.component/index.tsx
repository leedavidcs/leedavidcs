import { IconText } from "@/components/icon-text.component";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { FaCalendar, FaMapMarker } from "react-icons/fa";
import classes from "./styles.module.scss";

interface IProps {
	children?: ReactNode;
	className?: string;
	locationInfo?: ReactNode;
	subheader?: ReactNode;
	timeInfo?: ReactNode;
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
			<h3 className={classes.header}>{title}</h3>
			<h4 className={classes.subheader}>
				<strong className={classes.subheaderTitle}>{subheader}</strong>
			</h4>
			{(timeInfo || locationInfo) && (
				<div className={classes.info}>
					{timeInfo && <IconText icon={FaCalendar} text={timeInfo} />}
					{locationInfo && <IconText icon={FaMapMarker} text={locationInfo} />}
				</div>
			)}
			{children}
		</section>
	);
};
