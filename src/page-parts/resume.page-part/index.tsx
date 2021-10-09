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
						Full Stack Engineer with extensive experience in start-ups, serving various
						key roles in software development.
					</p>
					<p>Advanced expertise in TypeScript and Node.js with React and GraphQL.</p>
					<p>
						Demonstrated skill in architecting greenfield applications, researching
						emerging technologies, improving the developer experience, increasing SEO
						and collaborating in dynamic teams.
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
						HTML5, CSS3, React, Apollo Client, Urql, Styled-Components, Tailwind CSS,
						Visx, D3, Storybook, Framer-Motion, Redux, React-Three-Fiber, React-Window,
						Slate
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Backend"
						subheaderColor={colors.secondary}
					>
						Node.js, GraphQL, Apollo Server, Redis, Postgres, Socket.io, MongoDB,
						Prisma, Nexus, Express, Serverless, DataLoader
					</SubSection>
					<SubSection
						className={classes.skillsSubsection}
						subheader="Tooling + Misc."
						subheaderColor={colors.secondary}
					>
						Linux, Git, Figma, Webpack, Docker, GraphQL-Codegen, Github Actions, Jira,
						Confluence, Nodemailer, Vercel, Stripe, Twilio, Algolia, Cloudinary,
						Planetscale, Upstash, Amplitude, Google Analytics, Sentry, Postmark,
						Cypress, Jest, ESLint, Prettier, Lerna, Netlify, Cloudflare, RDS, Lambda,
						S3, CloudFront, CloudWatch
					</SubSection>
				</Section>
				<Section className={classes.skillsSection} title="Education">
					<SubSection
						title={
							<span className={classes.university}>
								<span className={classes.uc}>University of California,</span> San
								Diego
							</span>
						}
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
						title={
							<>
								Senior Frontend Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</>
						}
						subheader="Openbase"
						timeInfo="Apr 2021 - Present"
						locationInfo="San Francisco, CA"
					>
						<Ul>
							<Ul.Li>
								Ported the frontend from a SPA-Parcel app to Next.js, Apollo,
								Styled-Components, Storybook and Codegen. Improved all Lighthouse
								metrics from 20 to 90, and coverage from 0% to 70%.
							</Ul.Li>
							<Ul.Li>
								Architected and built dev.page with the Next.js, Apollo,
								Styled-Components, Storybook, Codegen and Tailwind CSS.
							</Ul.Li>
							<Ul.Li>
								Built Openbase package pages, category pages, user-profile pages,
								homepage and search.
							</Ul.Li>
							<Ul.Li>
								Created a redirect service with Serverless to handle redirects from
								old URLs for SEO.
							</Ul.Li>
							<Ul.Li>
								Suggested then created multiple product features to drive user
								acquisition and retention.
							</Ul.Li>
						</Ul>
					</SubSection>
					<SubSection
						title={
							<>
								Senior Full Stack Engineer&nbsp;
								<span className={classes.jobType}>(full-time)</span>
							</>
						}
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
								Implemented all GraphQL resolvers for: full-text search with
								Algolia, emails with Nodemailer, subscriptions and payouts with
								Stripe, presigned URL image uploads with AWS S3, business hour
								timezones with Google Maps, and entity CRUD with Nexus and Prisma.
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
								assist integration; and organized and led meetings with QA, graphics
								and the dev-ops teams to coordinate successful releases and
								milestones.
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
