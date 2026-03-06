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
        <a className={titleClassName}>{title}</a>
      </div>
    );

    const contentElement = (
      <div className='snakeSectionContent'>
        {children}
      </div>
    );

    return (
      <div className={`snakeSection ${alignmentClass}`} id={id} ref={ref}>
        {align === 'right' ? (
          <>
            {titleElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {titleElement}
          </>
        )}
      </div>
    );
  }
);

Section.displayName = 'Section';
