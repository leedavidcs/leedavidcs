import { WindowCover } from "@/components/window-cover.component";
import React, { FC, Fragment, useCallback, useState } from "react";

export const StandardStory: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);

	const close = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<button onClick={open}>Open</button>
			{isOpen && (
				<WindowCover>
					<button onClick={close}>Close</button>
				</WindowCover>
			)}
		</Fragment>
	);
};
