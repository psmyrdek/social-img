import {h, Component} from 'preact';
import classnames from 'classnames';
import GradientPicker from '../../components/gradient-picker';
import BlurRange from '../../components/blur-range';
import style from './style.css';

export default class ControlPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHidden: true
        };
    }

    toggleVisibility() {
        this.setState(prevState => {
            return {
                isHidden: !prevState.isHidden
            }
        })
    }

    renderControls({onGradientChange, onBlurChange, onNewTextArea}) {
        const popupClass = classnames(style.controlPanelPopup, {
            [style['controlPanelPopup--hidden']]: this.state.isHidden
        });

        return (
            <div class={popupClass}>
                <GradientPicker onChange={onGradientChange}/>
                <BlurRange onChange={onBlurChange}/>
                <button onClick={onNewTextArea} class={style.controlPanelButton}>
                    + Add text area
                </button>
            </div>
        )
    }

    render(props) {
        return (
            <div class={style.controlPanel}>
                <button class={style.controlPanelButton} onClick={() => this.toggleVisibility()}>Customize</button>
                {this.renderControls(props)}
            </div>
        )
    }
}