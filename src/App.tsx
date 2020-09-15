import * as React from "react";
import "./style.scss";
import { inject, observer } from "mobx-react";
import MainStore from "./store/mainStore";
import Main from "./components/Main";

export interface IAppProps {}

@inject("store")
@observer
export default class App extends React.Component<IAppProps> {
    mainStore = this.injected.store;
    private get injected() {
        return this.props as IAppProps & { store: MainStore };
    }

    public render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}
