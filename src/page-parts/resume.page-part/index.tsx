import { IconText, LetterPage, Section, SubSection, Ul } from "@/components";
import React, { FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import classes from "./styles.module.scss";

export const Resume: FC = () => {
	return (
		<LetterPage className={classes.root}>
			<header className={classes.header}>
				<h1 className={classes.name}>David Lee</h1>
				<h2 className={classes.occupation}>Software Engineer</h2>
				<div className={classes.contactUrls}>
					<div>
						<IconText
							className={classes.iconText}
							icon={FaPhone}
							text="(925)787-6363"
						/>
						<IconText icon={FaEnvelope} text="jobs.lee.david.cs@gmail.com" />
					</div>
					<div>
						<IconText
							className={classes.iconText}
							icon={FaGithub}
							text="github.com/leedavidcs"
						/>
						<IconText icon={FaLinkedin} text="jobs.lee.david.cs@gmail.com" />
					</div>
				</div>
			</header>
			<div className={classes.info}>
				<div className={classes.qualifications}>
					<Section title="Professional Experience">
						<SubSection
							title="Onfleet"
							subheader="Full Stack Engineer (full-time)"
							timeInfo="Jan 2019 - Dec 2019"
						>
							<Ul>
								<li>Did some shit</li>
							</Ul>
						</SubSection>
						<SubSection
							title="Outward Inc."
							subheader="Software Engineer (full-time)"
							timeInfo="Jan 2018 - Jan 2019"
						>
							<Ul>
								<li>Did some shit</li>
							</Ul>
						</SubSection>
						<SubSection
							title="Newport Asia LLC"
							subheader="Software Engineer (contract)"
							timeInfo="Jun 2016 - Dec 2017"
						>
							<Ul>
								<li>Did some shit</li>
							</Ul>
						</SubSection>
						<SubSection
							title="Bosera Int'l"
							subheader="Software Engineer (intern)"
							timeInfo="Jun 2015 - Aug 2015"
						>
							<Ul>
								<li>Did some shit</li>
							</Ul>
						</SubSection>
					</Section>
					<Section title="Misc. Experience">
						<Ul>
							<li>Did some shit</li>
						</Ul>
					</Section>
				</div>
				<div className={classes.skills}>
					<Section title="Summary">
						<p>
							Full Stack engineer, with hands-on experience in start-ups, serving
							various key roles in software development.
						</p>
						<p>
							Advanced expertise in TypeScript and Node.js development with React,
							Apollo + GraphQL.
						</p>
						<p>
							Demonstrated skill in researching emerging technologies, identifying
							opportunities to streamline existing processes and collaborating in a
							dynamic environment.
						</p>
					</Section>
					<Section title="Skills">asdf</Section>
					<Section title="Education">
						<SubSection
							title="University of California, San Diego"
							subheader="BS in Computer Science"
							timeInfo="Graduated: Jun 2017"
						/>
					</Section>
				</div>
			</div>
		</LetterPage>
	);
};
