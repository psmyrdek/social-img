import { h, Component } from 'preact';
import style from './style';

export default class BlurRange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blurValue: 0
        }
    }

    onRangeChange(value) {
        this.setState(prevState => {
            return {
                blurValue: value
            }
        });
        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                <p class={style.blurRangeTitle}>Blur</p>
                <input
                    class={style.inputStyle}
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={this.state.blurValue}
                    onChange={(e) => this.onRangeChange(e.srcElement.value)}
                />
            </div>
        )
    }
}