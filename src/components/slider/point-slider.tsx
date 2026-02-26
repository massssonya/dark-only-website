import {
    useState,
    type ReactNode,
    Children,
    useMemo,
    useCallback,
  } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { Bullet } from "../ui/bullet";
  import clsx from "clsx";
  
  interface Props {
    children: ReactNode;
    className?: string;
    value?: number;
    onChange?: (index: number) => void;
  }
  
  export function PointSlider({
    children,
    className,
    value,
    onChange,
  }: Props) {
    const slides = useMemo(() => Children.toArray(children), [children]);
  
    const isControlled = value !== undefined;
    const [internal, setInternal] = useState(0);
  
    const currentSlide = isControlled ? value! : internal;
  
    const setSlide = useCallback(
      (index: number) => {
        if (!isControlled) setInternal(index);
        onChange?.(index);
      },
      [isControlled, onChange]
    );
  
    const total = slides.length;
  
    return (
      <div
        className={clsx(
          "relative xl:h-[45.3125vw] md:h-[450px] rounded-[20px] overflow-hidden",
          className
        )}
        role="region"
        aria-roledescription="carousel"
        aria-label="Проекты"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
  
        <div className="absolute bottom-[24px] md:left-[25px] flex gap-[8px]">
          {slides.map((_, index) => (
            <Bullet
              key={index}
              $active={currentSlide === index}
              onClick={() => setSlide(index)}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }