import * as React from "react";

export interface IMainProps {}

export default class Main extends React.Component<IMainProps> {
    color: number = 1;
    constructor(props: IMainProps) {
        super(props);
        this.color = Math.ceil(Math.random() * 3);
    }

    public render() {
        return (
            <div>
                <div className="progress-bar">
                    <span
                        className={`progress-bar__level progress-bar__level--${
                            this.color === 1
                                ? "green"
                                : this.color === 3
                                ? "red"
                                : "orange"
                        }`}
                    ></span>
                </div>
                <div className="main">
                    <div className="main__container">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="main__container">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}
