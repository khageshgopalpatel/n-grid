import { memo, useCallback } from "react";
import "./NGrid.css";

interface NGridProps {
  heading?: string;
  subHeading?: string;
  onClick: () => void;
  className?: string;
  labelPosition?: "top" | "left";
  columns?: number;
  buttonText?: string;
  children: React.ReactNode;
}

const NGrid: React.FC<NGridProps> = ({
  heading = "My form",
  subHeading = "",
  className,
  onClick,
  labelPosition = "top",
  columns = 2,
  buttonText = "Add More",
  children,
}) => {

  const buttonClickHandle = useCallback(onClick, []);

  return (
    <div className={className}>
      <h3 className="form-title">{heading}</h3>
      <div className="sub-heading">{subHeading}</div>
      <form className="form">
        <div
          className={`elements-container label-${labelPosition}`}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {children}
        </div>
        <div className="form-actions">
          <button type="button" onClick={buttonClickHandle}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(NGrid);
