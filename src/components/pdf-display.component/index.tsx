import { Spinner } from "@/components/spinner.component";
import { WindowCover } from "@/components/window-cover.component";
import html2canvas from "html2canvas";
import JsPdf from "jspdf";
import React, {
	FC,
	Fragment,
	MutableRefObject,
	ReactElement,
	RefObject,
	useCallback,
	useMemo,
	useRef,
	useState
} from "react";
import classes from "./styles.module.scss";

const LETTER_PAPER_HEIGHT = 11;
const LETTER_PAPER_WIDTH = 8.5;
/**
 * !HACK
 * @description No idea why inches are not being represented correctly, but stackoverflow states to
 *     multiply inches value by 72.
 * @date July 12, 2020
 * @author David Lee
 * @see (@link https://stackoverflow.com/a/59504239/9074275)
 */
const TO_INCH_CONVERSION = 72;

interface IProps {
	children: ReactElement;
	className?: string;
	fileName: string;
	onComplete?: () => void;
}

interface IUseToPdfOptions {
	fileName: string;
}

const useToPdf = (ref: RefObject<HTMLElement>, options: IUseToPdfOptions) => {
	const { fileName } = options;

	const [loading, setLoading] = useState<boolean>(false);

	const cloneRef: MutableRefObject<HTMLElement | null> = useRef<HTMLElement>(null);

	const getElementTarget = useCallback(() => {
		const elem = ref.current!;

		const clone = elem.cloneNode(true) as HTMLElement;

		clone.style.position = "fixed";
		clone.style.top = "0";
		clone.style.left = "0";

		document.body.appendChild(clone);

		cloneRef.current = clone;

		return clone;
	}, [ref]);

	const cleanElementTarget = useCallback(
		() => cloneRef.current?.parentElement?.removeChild(cloneRef.current),
		[]
	);

	const toPdf = useCallback(() => {
		window.scrollTo(0, 0);

		setLoading(true);

		const target = getElementTarget();

		return html2canvas(target).then((canvas) => {
			cleanElementTarget();

			setLoading(false);

			const dataUrl: string = canvas.toDataURL("image/png");

			const pdf = new JsPdf({
				orientation: "portrait",
				unit: "in",
				format: [
					LETTER_PAPER_WIDTH * TO_INCH_CONVERSION,
					LETTER_PAPER_HEIGHT * TO_INCH_CONVERSION
				]
			});

			pdf.addImage(dataUrl, "JPEG", 0, 0);
			pdf.save(fileName);
		});
	}, [cleanElementTarget, fileName, getElementTarget]);

	const values = useMemo(() => ({ loading, toPdf }), [loading, toPdf]);

	return values;
};

export const PdfDisplay: FC<IProps> = ({ children, className, fileName, onComplete }) => {
	const sourceRef = useRef<HTMLDivElement>(null);

	const { loading, toPdf } = useToPdf(sourceRef, { fileName });

	return (
		<Fragment>
			<div className={className}>
				<div className={classes.controlContainer}>
					<button className={classes.downloadBtn} onClick={toPdf} type="button">
						Download Resume
					</button>
				</div>
				<div className={classes.sourceContainer}>
					{React.cloneElement(children, { ref: sourceRef })}
				</div>
			</div>
			{loading && (
				<WindowCover className={classes.loadingCover}>
					<div>
						<Spinner />
						<h1>Loading...</h1>
					</div>
				</WindowCover>
			)}
		</Fragment>
	);
};
