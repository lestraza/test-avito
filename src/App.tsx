import * as React from "react";
import "./style.scss";
import { inject, observer } from "mobx-react";
import MainStore from "./store/mainStore";
import Main from "./components/Main";
import Button from "./components/Button";

export interface IAppProps {}

interface IState {
    hasShownNav: boolean
}

@inject("store")
@observer
export default class App extends React.Component<IAppProps, IState> {
    mainStore = this.injected.store;
    private get injected() {
        return this.props as IAppProps & { store: MainStore };
    }

    state = {
        hasShownNav: false
    }
    showGlide = () => {
        this.setState({
            hasShownNav: !this.state.hasShownNav
        })
    }

    public render() {
        const {hasShownNav} = this.state
        return (
            <div>
                <Main />
                <Button action={this.showGlide}/>
                { hasShownNav && <div className="glide">GLIDE</div>}

            </div>
        );
    }
}
