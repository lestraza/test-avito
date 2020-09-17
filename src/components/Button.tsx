import * as React from 'react';

export interface IButtonProps {
    action: () => void
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <div className="button" onClick={this.props.action}>
        Button
      </div>
    );
  }
}
