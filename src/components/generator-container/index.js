import { h, Component } from 'preact';
import ImagePreview from '../../components/image-preview';
import GradientPicker from '../../components/gradient-picker';
import BlurRange from '../../components/blur-range';
import FullScreenPreview from '../../components/full-screen-preview';
import style from './style';

export default class GeneratorContainer extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: '',
            gradientUrl: '',
            blurValue: 0,
            isFullScreen: false
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

    toggleFullScreen(isFullScreen) {
        debugger;
        this.setState(prevState => {
            return {
                ...prevState,
                isFullScreen: isFullScreen
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
                    <FullScreenPreview enabled={this.state.isFullScreen} onPreviewClose={this.toggleFullScreen.bind(this, false)}>
                        <div class={style.imagePreviewContainer}>
                            <ImagePreview imageUrl={this.state.imageUrl} blurValue={this.state.blurValue} />
                            <img src={this.state.gradientUrl} style="position: absolute; top: 0" />
                        </div>
                    </FullScreenPreview>
                </div>
                <div class={style.controlPanel}>
                    <GradientPicker onChange={this.onGradientChange.bind(this)} />
                    <BlurRange onChange={this.onBlurChange.bind(this)} />
                    <button onClick={() => this.toggleFullScreen(true)}>Full Screen</button>
                </div>
            </div>
        )
    }
}
