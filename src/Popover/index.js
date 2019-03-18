// @flow
import * as React from "react";
import styled from "styled-components";

import Portal from "../Portal";
import ClickOutside from "../ClickOutside";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props, State } from "./index.flow";

const StyledPopoverChild = styled.div`
  position: relative;
`;

class Popover extends React.PureComponent<Props, State> {
  state = {
    shown: false,
  };

  handleIn = () => {
    this.setState({ shown: true });
  };

  handleOut = () => {
    this.setState({ shown: false });
  };

  handleClick = () => {
    this.setState({ shown: !this.state.shown });
  };

  handleClickOutside = () => {
    this.timeoutOutside = setTimeout(() => {
      this.setState({ shown: false });
    });
  };

  handleClickContent = () => {
    clearTimeout(this.timeoutOutside);
  };

  container: { current: any | HTMLDivElement } = React.createRef();
  timeoutOutside: TimeoutID;

  render() {
    const { shown } = this.state;
    const { children, content, preferredPosition } = this.props;

    return (
      <React.Fragment>
        <StyledPopoverChild onClick={this.handleClick} ref={this.container}>
          <ClickOutside onClickOutside={this.handleClickOutside}>{children}</ClickOutside>
        </StyledPopoverChild>
        {shown && (
          <Portal element="popovers">
            <PopoverContentWrapper
              containerRef={this.container.current}
              content={content}
              handleClickContent={this.handleClickContent}
              preferredPosition={preferredPosition}
              handleClose={this.handleOut}
            />
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

export default Popover;
