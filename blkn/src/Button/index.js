// @flow
import * as React from "react";

type Props = {
  title: string,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  secondary?: boolean,
  size?: string,
  icon?: Function,
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.icon && (
        <props.icon
          fill={props.secondary ? "#46515e" : "white"}
          height={props.size === "normal" ? "20px" : props.size === "small" ? "20px" : "26px"}
          width="20px"
          style={{ position: "absolute", top: "50%", left: "12px", transform: "translateY(-50%)" }}
        />
      )}
      {props.title}
      <style jsx>{`
      button {
        opacity: ${props.disabled ? "0.3" : "1"}
        cursor: ${props.disabled ? "default" : "pointer"}
        background-color: ${props.secondary ? "#e8edf1" : "#00a991"}
        color: ${props.secondary ? "#46515e" : "white"}
        border: none;
        border-radius: 3px;
        font-weight: 500;
        padding: ${
          props.size === "normal" ? "12px 16px" : props.size === "small" ? "8px 12px" : "14px 28px"
        };
        padding-left: ${props.icon && "40px"}
        font-size: ${props.size === "large" ? "16px" : "14px"}
        position: relative;
      }
    `}</style>
    </button>
  );
};

export default Button;
