import { LetterPage, Section, SubSection } from "@/components";
import Faker from "faker";
import React, { FC } from "react";
import classes from "./styles.module.scss";

Faker.seed(1);

const summary = Faker.lorem.paragraph();

export const Resume: FC = () => {
	return (
		<LetterPage>
			<div className={classes.info}>
				<div className={classes.qualifications}>
					<Section title="Experience">
						<SubSection title="Full Stack Engineer">asdf</SubSection>
					</Section>
				</div>
				<div className={classes.skills}>
					<Section title="Summary">{summary}</Section>
				</div>
			</div>
		</LetterPage>
	);
};
