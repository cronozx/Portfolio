import { forwardRef, ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id?: string;
  title: string;
  titleClassName?: string;
  align?: 'left' | 'right';
  children: ReactNode;
  titleRef?: React.Ref<HTMLDivElement>;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, title, titleClassName, align = 'right', children, titleRef }, ref) => {
    const alignmentClass = align === 'left' ? 'snakeSectionLeft' : 'snakeSectionRight';

    const titleElement = (
      <div className='snakeSectionTitle' ref={titleRef}>
        <h2 className={titleClassName}>{title}</h2>
      </div>
    );

    const contentElement = (
      <div className='snakeSectionContent'>
        {children}
      </div>
    );

    /* Title always comes first in the DOM so it stays above the content when
       the section collapses to a column; CSS `order` swaps the columns for
       left-aligned sections on desktop. */
    return (
      <div className={`snakeSection ${alignmentClass}`} id={id} ref={ref}>
        {titleElement}
        {contentElement}
      </div>
    );
  }
);

Section.displayName = 'Section';
