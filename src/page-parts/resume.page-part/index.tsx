import colors from "@/colors.scss";
import { IconText, LetterPage, Section, SubSection, Ul } from "@/components";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./styles.module.scss";

export const Resume = forwardRef<HTMLDivElement>((__, ref) => {
	return (
		<LetterPage className={classes.root} ref={ref}>
			<div className={classes.skills}>
				<Section className={clsx(classes.skillsSection, classes.contact)} title="Contact">
					<IconText icon={FaEnvelope} text="jobs.lee.david.cs@gmail.com" />
					<IconText icon={FaGithub} text="github.com/leedavidcs" />
					<IconText icon={FaLinkedin} text="linkedin.com/in/leedavidcs" />
				</Section>
				<Section className={classes.skillsSection} title="Summary">
					<p>
						Full Stack engineer, with hands-on experience in start-ups, serving various
						key roles in software development.
					</p>
					<p>
						Advanced expertise in TypeScript and Node.js development with React, Apollo
						+ GraphQL.
					</p>
					<p>
						Demonstrated skill in researching emerging technologies, identifying
						opportunities to streamline existing processes and collaborating in a
						dynamic environment.
					</p>
				</Section>
				<Section className={classes.skillsSection} title="Skills">
					<SubSection
						className={classes.skillsSubsection}
						subheader="Languages"
						subheaderColor={colors.secondary}
					>
						TypeScript, JavaScript
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Frameworks"
						subheaderColor={colors.secondary}
					>
						Next.js, Gatsby
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Frontend"
						subheaderColor={colors.secondary}
					>
						HTML5, CSS3, React, Apollo Client, Sass, Storybook, Redux, SEO, CSS-in-JS
						(JSS, Styled-Components, Linaria, Emotion)
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Backend"
						subheaderColor={colors.secondary}
					>
						Node.js, Serverless, GraphQL, Nexus, Prisma, Apollo Server, DataLoader,
						MongoDB, Postgres, Redis, Socket.io, Koa, Express
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Tooling + Misc."
						subheaderColor={colors.secondary}
					>
						Figma, Webpack, Jest, ESLint, Linux, Git, Github Actions, Jira, Confluence,
						Trello, Docker, Vercel, Travis, SonarQube, Insomnia, Slack, Stripe, Twilio,
						Nodemailer, Mjml
					</SubSection>
				</Section>
				<Section className={classes.skillsSection} title="Education">
					<SubSection
						title="University of California, San Diego"
						subheader="BS in Computer Science"
						subheaderColor={colors.secondary}
						timeInfo="Graduated: June 2017"
					/>
				</Section>
			</div>

			<div className={classes.qualifications}>
				<header className={classes.header}>
					<h1 className={classes.name}>David Lee</h1>
					<h2 className={classes.occupation}>Software Engineer</h2>
				</header>
				<Section title="Professional Experience">
					<SubSection
						title={
							<>
								Full Stack Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</>
						}
						subheader="Onfleet"
						timeInfo="Jan 2019 - Jan 2020"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Reimplemented legacy UI (previously written in ES5, AngularJS +
								LESS) to TypeScript, React + Styled-Components, with snapshot
								testing through Jest + Storybook.
							</Ul.Li>
							<Ul.Li>
								Advocated then directed the migration of the legacy CoffeeScript +
								Restify backend monolith to TypeScript, Serverless + GraphQL with
								increases to integration and unit testing.
							</Ul.Li>
							<Ul.Li>
								Rewrote the Stripe billing logic, and the Twilio communications
								proxying service, once the legacy for both experienced production
								breakages.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</>
						}
						subheader="Outward Inc."
						timeInfo="Jan 2018 - Jan 2019"
						locationInfo="San Jose, CA"
					>
						<Ul>
							<Ul.Li>
								Implemented all client-side features for a 3D monogramming web-app
								that supports more use-cases and produces higher-fidelity product
								images than Adobe&apos;s Scene7 for Williams-Sonoma.
							</Ul.Li>
							<Ul.Li>
								Worked with project managers in driving requirements and timelines;
								talked to clients directly to assist integration; and organized and
								led meetings with QA, production and the dev-ops teams to coordinate
								successful releases.
							</Ul.Li>
							<Ul.Li>
								Created a RESTful service for Bassett Furniture&apos;s new consumer
								site, including the customer/designer interactions and
								authentication.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(contract)</span>
							</>
						}
						subheader="Newport Asia LLC"
						timeInfo="June 2016 - Dec 2017"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Improved financial analyst workflows by leveraging 3rd-party market
								data APIs to create tools that performed special aggregations and
								produced visualizations of market data.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(intern)</span>
							</>
						}
						subheader="Bosera Int'l"
						timeInfo="June 2015 - Aug 2015"
						locationInfo="Central, Hong Kong"
					>
						<Ul>
							<Ul.Li>
								Gathered technical requirements and timelines, and produced
								wireframes to present to department managers.
							</Ul.Li>
							<Ul.Li>
								Built several pages and data visualization modules for the
								company&apos;s revamped website.
							</Ul.Li>
						</Ul>
					</SubSection>
				</Section>
				<Section title="Personal Projects">
					<Ul>
						<Ul.Li>
							Currently building an administrative app for businesses in a private
							repo on a 2-person team. Responsible for half of both design in Figma
							and frontend implementation; and solely responsible for infrastructure,
							backend, and SEO.
						</Ul.Li>
						<Ul.Li>
							Worked on a serverless application where users can purchase IexCloud
							stock data, paper trade, view data on a data-grid, and build webhooks
							where data can be structured through GraphQL.
						</Ul.Li>
						<Ul.Li>
							Leveraged Mjml-React to create visually consistent emails across most
							email-clients/browsers in React.
						</Ul.Li>
						<Ul.Li>
							Migrated a Serverless, Koa + GraphQL SDL, Mongoose repo to Next, Nexus +
							Prisma.
						</Ul.Li>
					</Ul>
				</Section>
			</div>
		</LetterPage>
	);
});

Resume.displayName = "Resume";
