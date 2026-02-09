import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const useScrollState = () => {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
	const { scrollY, scrollYProgress } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = Math.abs(scrollY.getPrevious() as number);
		if (!previous) return;
		const newScrollDirection = (latest > previous) ? "down" : "up";
		setScrollDirection(newScrollDirection);
	});

	return { scrollDirection, setScrollDirection, scrollY, scrollYProgress };
};
