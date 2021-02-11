import * as colors from "@/colors";
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
						HTML5, CSS3, React, Apollo Client, Storybook, Redux, Sass, CSS-in-JS (JSS,
						Styled-Components, Linaria, Emotion), Framer-Motion, Visx
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Backend"
						subheaderColor={colors.secondary}
					>
						Node.js, GraphQL, Apollo Server, Nexus, Prisma, DataLoader, MongoDB,
						Postgres, Redis, Socket.io, Serverless, Koa, Express
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Tooling + Misc."
						subheaderColor={colors.secondary}
					>
						Figma, Webpack, Rollup, Jest, ESLint, Linux, Git, Github Actions, Jira,
						Confluence, Trello, Docker, Vercel, Travis, SonarQube, Insomnia, Slack,
						Algolia, Stripe, Twilio, Nodemailer, Mjml, Google Maps
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
				<Section className={classes.professionalExperience} title="Professional Experience">
					<SubSection
						title="Senior Full Stack Engineer / Sole Proprietor"
						subheader="Toastel"
						timeInfo="Jan 2020 - Present"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Built Toastel using a React, TypeScript, Apollo, Next.js, Linaria,
								Nexus + Prisma stack. Designed in Figma, and created an atomic
								design system without using any UI-toolkit or CSS framework.
							</Ul.Li>
							<Ul.Li>
								Created a charting library with visx, a feature-rich data-grid
								library with react-window, responsive emails with mjml-react,
								animations and gestures with framer-motion, etc.
							</Ul.Li>
							<Ul.Li>
								Coded over 200 components and 400 stories on Storybook, with
								snapshot testing on Jest.
							</Ul.Li>
							<Ul.Li>
								Achieved 90-100 on all Google Lighthouse metrics (excluding PWA).
							</Ul.Li>
							<Ul.Li>
								Implemented JWT authentication, with refresh-tokens and blacklisting
								with Redis.
							</Ul.Li>
							<Ul.Li>
								Created internal GraphQL-Nexus plugins to rate-limit resolvers,
								validate inputs, and prevent malicious queries with complexity and
								depth limits.
							</Ul.Li>
							<Ul.Li>
								Implemented full-text search with Algolia, sales-tax calculations
								with Octobat, subscriptions and payouts with Stripe, image uploads
								with AWS S3, and timezones with Google Maps API.
							</Ul.Li>
						</Ul>
					</SubSection>
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
								testing through Jest + Storybook
							</Ul.Li>
							<Ul.Li>
								Advocated then directed the migration of the legacy CoffeeScript +
								Restify monolith to TypeScript, Apollo, Serverless-Http + GraphQL
								with increases to integration and unit testing.
							</Ul.Li>
							<Ul.Li>
								Rewrote both the Stripe billing and the Twilio voice and SMS
								proxying services to support more features, be more declarative and
								be more testable.
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
								images than Adobe&apos;s Scene7 for Williams-Sonoma (built with
								React, TypeScript, JSS, Apollo, GraphQL, Pixi, Babylon).
							</Ul.Li>
							<Ul.Li>
								Worked with project managers in driving requirements and timelines;
								talked to clients directly to assist integration; and organized and
								led meetings with QA, production and the dev-ops teams to coordinate
								successful releases and milestones.
							</Ul.Li>
							<Ul.Li>
								Created a RESTful service for Bassett Furniture&apos;s new consumer
								site, including the customer/designer interactions and
								authentication (built with TypeScript + Koa).
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
						subheader="Newport Asia"
						timeInfo="June 2016 - Dec 2017"
						locationInfo="San Francisco, CA"
					/>
					<SubSection
						title={
							<>
								Software Engineer&nbsp;
								<span className={classes.jobType}>(intern)</span>
							</>
						}
						subheader="Bosera International"
						timeInfo="June 2015 - June 2016"
						locationInfo="Central, Hong Kong"
					/>
				</Section>
			</div>
		</LetterPage>
	);
});

Resume.displayName = "Resume";
