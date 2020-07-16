import colors from "@/colors.scss";
import { IconText, LetterPage, Section, SubSection, Ul } from "@/components";
import React, { forwardRef, Fragment } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./styles.module.scss";

export const Resume = forwardRef<HTMLDivElement>((__, ref) => {
	return (
		<LetterPage className={classes.root} ref={ref}>
			<div className={classes.skills}>
				<Section className={classes.contact} title="Contact">
					<IconText
						className={classes.iconText}
						icon={FaGithub}
						text="github.com/leedavidcs"
					/>
					<IconText icon={FaLinkedin} text="linkedin.com/in/leedavidcs" />
					<IconText icon={FaEnvelope} text="jobs.lee.david.cs@gmail.com" />
				</Section>
				<Section title="Summary">
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
				<Section title="Skills">
					<SubSection
						className={classes.skillsSection}
						subheader="Languages"
						subheaderColor={colors.secondary}
					>
						TypeScript, JavaScript
					</SubSection>
					<SubSection
						className={classes.skillsSection}
						subheader="Frontend"
						subheaderColor={colors.secondary}
					>
						HTML5, CSS3, React, Apollo Client, JSS, Sass, Storybook, Redux, RxJS,
						Styled-Components
					</SubSection>
					<SubSection
						className={classes.skillsSection}
						subheader="Backend"
						subheaderColor={colors.secondary}
					>
						Node.js, Next.js, Serverless, GraphQL, Nexus, Prisma, Apollo Server,
						DataLoader, MongoDB, Postgres, Redis, Socket.io, Koa, Express
					</SubSection>
					<SubSection
						className={classes.skillsSection}
						subheader="Tooling + Misc."
						subheaderColor={colors.secondary}
					>
						Webpack, Stripe, Twilio, Nodemailer, Mjml, Jest, ESLint, Linux, VSCode, Git,
						Jira, Confluence, Trello, Docker, Travis, SonarQube, Insomnia, Slack, Figma
					</SubSection>
				</Section>
				<Section title="Education">
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
							<Fragment>
								Full Stack Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</Fragment>
						}
						subheader="Onfleet"
						timeInfo="Jan 2019 - Dec 2019"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Directed the migration of the legacy CoffeeScript + Restify backend
								monolith to TypeScript, Serverless + GraphQL with increases to
								integration and unit testing.
							</Ul.Li>
							<Ul.Li>
								Moved legacy ES5, AngularJS + LESS code to TypeScript, React +
								Styled-Components, with snapshot testing through Jest + Storybook.
							</Ul.Li>
							<Ul.Li>
								Rewrote the Stripe billing logic, and the Twilio communications
								proxying service, once the legacy for both began to fail more
								frequently.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<Fragment>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</Fragment>
						}
						subheader="Outward Inc."
						timeInfo="Jan 2018 - Jan 2019"
						locationInfo="San Jose, CA"
					>
						<Ul>
							<Ul.Li>
								Implemented all client-side features for a 3D monogramming app that
								supports more use-cases and produces higher-fidelity product images
								than Adobe&apos;s Scene7 for Williams-Sonoma.
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
							<Fragment>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(contract)</span>
							</Fragment>
						}
						subheader="Newport Asia LLC"
						timeInfo="June 2016 - Dec 2017"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Created tools that aggregated and produced visualizations of market
								data and income models through use of Bloomberg&apos;s API.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<Fragment>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(intern)</span>
							</Fragment>
						}
						subheader="Bosera Int'l"
						timeInfo="June 2015 - Aug 2015"
						locationInfo="Central, Hong Kong"
					>
						<Ul>
							<Ul.Li>
								Collaborated with department managers to gather technical
								requirements and decide on wireframes and timelines.
							</Ul.Li>
							<Ul.Li>
								Built data visualization modules for the company&apos;s revamped
								site.
							</Ul.Li>
						</Ul>
					</SubSection>
				</Section>
				<Section title="Personal Projects">
					<Ul>
						<Ul.Li>
							Built a serverless application where users can purchase IexCloud stock
							data, paper trade, view data on a data-grid, and build webhooks that
							allows users to structure data received through GraphQL.
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
