import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
	radius?: number;
	duration?: number;
	speed?: number;
	scrambleChars?: string;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	buttonMode?: boolean;
	as?: keyof JSX.IntrinsicElements; // Added to allow different HTML elements
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
	radius = 100,
	duration = 1.2,
	speed = 0.3,
	scrambleChars = ".:",
	className = "",
	style = {},
	children,
	buttonMode = false,
	as: Tag = "span", // Default to span to avoid block-level issues
}) => {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const lastEventTimeRef = useRef<number>(0);
	const throttleDelayRef = useRef<number>(16); // ~60fps

	// Separate metallic class from other classes
	const classes = className.split(' ');
	const metallicClass = classes.find(c => c.startsWith('metallic-text')) || null;
	const otherClasses = classes.filter(c => !c.startsWith('metallic-text'));

	useEffect(() => {
		if (!rootRef.current) return;

		// Use the Tag element type for splitting
		const selector = Tag === "p" ? "p" : Tag;
		const element = rootRef.current.querySelector(selector);
		
		if (!element) return;

		const split = SplitText.create(element, {
			type: "chars",
			charsClass: "inline-block will-change-transform",
		});

		split.chars.forEach((el) => {
			const c = el as HTMLElement;
			gsap.set(c, { attr: { "data-content": c.innerHTML } });
			// Apply metallic class to each character element
			if (metallicClass) {
				c.classList.add(metallicClass);
			}
		});

		const handleMove = (e: PointerEvent) => {
			// Throttle events to improve performance
			const now = performance.now();
			if (now - lastEventTimeRef.current < throttleDelayRef.current) {
				return;
			}
			lastEventTimeRef.current = now;

			split.chars.forEach((el) => {
				const c = el as HTMLElement;
				const rect = c.getBoundingClientRect();
				const dx = e.clientX - (rect.left + rect.width / 2);
				const dy = e.clientY - (rect.top + rect.height / 2);
				const dist = Math.hypot(dx, dy);

				if (dist < radius) {
					gsap.to(c, {
						overwrite: true,
						duration: duration * (1 - dist / radius),
						scrambleText: {
							text: c.dataset.content || "",
							chars: scrambleChars,
							speed,
						},
						ease: "none",
					});
				}
			});
		};

		const el = rootRef.current;
		el.addEventListener("pointermove", handleMove);

		return () => {
			el.removeEventListener("pointermove", handleMove);
			split.revert();
		};
	}, [radius, duration, speed, scrambleChars, Tag, metallicClass]);

	// Removed the default margin and sizing that was causing layout issues
	const defaultClass = buttonMode ? '' : 'font-mono';

	return (
		<div
			ref={rootRef}
			className={`${defaultClass} text-white ${otherClasses.join(' ')}`}
			style={style}
		>
			<Tag>{children}</Tag>
		</div>
	);
};

export default ScrambledText;