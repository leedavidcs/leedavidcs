import * as colors from "@/colors";
import { IconText, LetterPage, Section, SubSection, Ul } from "@/components";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { FaBreadSlice, FaEnvelope, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import classes from "./styles.module.scss";

export const Resume = forwardRef<HTMLDivElement>((__, ref) => {
	return (
		<LetterPage className={classes.root} ref={ref}>
			<div className={classes.skills}>
				<Section
					className={clsx(classes.skillsSection, classes.contact)}
					title="Contact + Sites"
				>
					<IconText icon={FaEnvelope} text="jobs.lee.david.cs@gmail.com" />
					<IconText icon={FaLinkedin} text="linkedin.com/in/leedavidcs" />
					<IconText icon={FaGithub} text="github.com/leedavidcs" />
					<IconText icon={FaUser} text="leedavidcs.dev" />
					<IconText icon={FaBreadSlice} text="toastel.com" />
				</Section>
				<Section className={clsx(classes.skillsSection, classes.summary)} title="Summary">
					<p>
						Full Stack Engineer, with hands-on experience in start-ups, serving various
						key roles in software development.
					</p>
					<p>
						Advanced expertise in TypeScript and Node.js development with React and
						GraphQL.
					</p>
					<p>
						Demonstrated skill in researching emerging technologies, streamlining
						existing processes, improving SEO and collaborating in dynamic environments.
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
						HTML5, CSS3, React, Apollo Client, Urql, CSS-in-JS (Styled-Components,
						Linaria, Emotion), Sass, Redux, Visx, D3, Framer-Motion, Storybook,
						React-Three-Fiber, React-Window
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Backend"
						subheaderColor={colors.secondary}
					>
						Node.js, GraphQL, Nexus, Prisma, Apollo Server, GraphQL-Tools, Koa, Express,
						Redis, Postgres, MongoDB, Socket.io, Serverless, DataLoader
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Tooling + Misc."
						subheaderColor={colors.secondary}
					>
						Linux, Git, Figma, Webpack, Rollup, GraphQL-Codegen, Docker, Trello, Jira,
						Confluence, Nodemailer, Mjml, Algolia, Stripe, Twilio, Google Maps, Github
						Actions, Travis, Jest, ESLint, Prettier, Lerna, Vercel, Insomnia
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
						title="Senior Frontend Engineer"
						subheader="Openbase"
						timeInfo="Apr 2021 - Present"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Single-handedly ported the frontend from a SPA-Parcel app to
								Next.js, TypeScript, Apollo, Styled-Components, GraphQL-Codegen and
								Jest in my first month. Simultaneously improved web vitals, a11y and
								SEO on Lighthouse to &gt; 90% on all metrics, and added 70%
								test-coverage.
							</Ul.Li>
							<Ul.Li>
								Created a redirect service with Serverless to handle redirects from
								old URLs for SEO.
							</Ul.Li>
							<Ul.Li>
								Built pages for users to browse npm packages, that also improve
								crawlability for GoogleBot.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title="Senior Full Stack Engineer"
						subheader="Toastel"
						timeInfo="Jan 2020 - Mar 2021"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Built Toastel using a React, TypeScript, Apollo, Next.js, Linaria,
								Nexus + Prisma stack.
							</Ul.Li>
							<Ul.Li>
								Designed in Figma, and created an atomic design system without using
								any component libraries or CSS framework, while improving
								accessibility and minimizing client bundle size.
							</Ul.Li>
							<Ul.Li>
								Authored an internal charting library with Visx, a data-grid library
								with React-Window, responsive emails with Mjml-React, animations and
								gestures with Framer-Motion, and more.
							</Ul.Li>
							<Ul.Li>
								Coded over 300 components and 400 stories on Storybook, with
								snapshot testing on Jest.
							</Ul.Li>
							<Ul.Li>
								Achieved 95-100 on all Google Lighthouse metrics (excluding PWA).
							</Ul.Li>
							<Ul.Li>
								Implemented JWT auth with refresh-tokens, blacklisting and retries
								using Redis + Apollo Link.
							</Ul.Li>
							<Ul.Li>
								Created several GraphQL-Nexus plugins to rate-limit resolvers,
								validate inputs, and prevent malicious queries with complexity and
								depth limits.
							</Ul.Li>
							<Ul.Li>
								Implemented all GraphQL resolvers for full-text search with Algolia,
								emails with Nodemailer, subscriptions and payouts with Stripe,
								presigned URL image uploads with AWS S3, business hour timezones
								with Google Maps, and entity CRUD with Prisma.
							</Ul.Li>
							<Ul.Li>
								Set up an automated CI pipeline, with lint, test, build and deploy
								steps to preview / staging / production environments using Github
								Actions, Vercel, ESLint and Jest.
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
								Migrated the ES5 + AngularJS frontend to TypeScript, React,
								Styled-Components and Jest.
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
								Mentored Junior Frontend Engineers; worked with project managers in
								driving requirements and timelines; talked to clients directly to
								assist integration; and organized and led meetings with QA,
								production and the dev-ops teams to coordinate successful releases
								and milestones.
							</Ul.Li>
							<Ul.Li>
								Created a RESTful service for Bassett Furniture&apos;s new consumer
								site, including the customer/designer interactions and
								authentication (built with TypeScript + Koa).
							</Ul.Li>
						</Ul>
					</SubSection>
				</Section>
			</div>
		</LetterPage>
	);
});

Resume.displayName = "Resume";
