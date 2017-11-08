import { h, Component } from 'preact';
import ImagePreview from '../../components/image-preview';
import GradientPicker from '../../components/gradient-picker';
import style from './style';

export default class GeneratorContainer extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: '',
            gradientUrl: ''
        };
    }

    updateImageUrl(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                imageUrl: e.srcElement.value
            }
        });
    }

    onGradientChange(gradientUrl) {
        this.setState(prevState => {
            return {
                ...prevState,
                gradientUrl: gradientUrl
            }
        });
    }

    render() {

        return (
            <div class={style.generator}>
                <div class="imagePreview">
                    <input
                        type="text"
                        class={style.generatorInput}
                        placeholder="Image URL"
                        value={this.state.imageUrl}
                        onChange={e => this.updateImageUrl(e)}
                    />
                    <div style="position: relative">
                        <ImagePreview imageUrl={this.state.imageUrl} />
                        <img src={this.state.gradientUrl} style="position: absolute; top: 0" />
                    </div>
                </div>
                <div class={style.controlPanel}>
                    <GradientPicker onChange={this.onGradientChange.bind(this)} />
                </div>
            </div>
        )
    }
}
