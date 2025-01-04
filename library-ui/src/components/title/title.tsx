export type TitleProps = {
  title: string;
  className: string;
};

export const TitleComponent = ({ title, className: className }: TitleProps) => {
  return <div className={className}>{title}</div>;
};