import { h, Component } from 'preact';
import ImagePreview from '../../components/image-preview';
import GradientPicker from '../../components/gradient-picker';
import BlurRange from '../../components/blur-range';
import style from './style';

export default class GeneratorContainer extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: '',
            gradientUrl: '',
            blurValue: 0
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

    onBlurChange(blurValue) {
        this.setState(prevState => {
            return {
                ...prevState,
                blurValue: blurValue
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
                    <div class={style.imagePreviewContainer}>
                        <ImagePreview imageUrl={this.state.imageUrl} blurValue={this.state.blurValue} />
                        <img src={this.state.gradientUrl} style="position: absolute; top: 0" />
                    </div>
                </div>
                <div class={style.controlPanel}>
                    <GradientPicker onChange={this.onGradientChange.bind(this)} />
                    <BlurRange onChange={this.onBlurChange.bind(this)} />
                </div>
            </div>
        )
    }
}
