import { h, Component } from 'preact';

import ImageInput from '../../components/image-input';
import ImageContainer from '../../components/image-container';
import ControlPanel from '../../components/control-panel';
import style from './style';

export default class GeneratorContainer extends Component {

    constructor() {
        super();
        this.state = {
            imageUrl: 'https://poznajprogramowanie.pl/wp-content/uploads/2017/11/front-post.png',
            gradientUrl: '',
            blurValue: 0,
            isFullScreen: false,
            textAreaModels: []
        };
    }

    updateImageUrl(newImageUrl) {
        this.setState(prevState => {
            return {
                imageUrl: newImageUrl
            }
        });
    }

    onGradientChange(gradientUrl) {
        this.setState(prevState => {
            return {
                gradientUrl: gradientUrl
            }
        });
    }

    onBlurChange(blurValue) {
        this.setState(prevState => {
            return {
                blurValue: blurValue
            }
        });
    }

    toggleFullScreen() {
        this.setState(prevState => {
            return {
                isFullScreen: !prevState.isFullScreen
            }
        });
    }

    onNewTextArea() {
        this.setState(prevState => {
            return {
                textAreaModels: [...prevState.textAreaModels, {
                    text: 'Click me',
                    top: 100,
                    italic: false,
                    fontSize: 30,
                    fontWeight: 400,
                    isEditEnabled: false
                }]
            }
        });
    }

    render() {
        return (
            <div>
                <div class={style.inputContainer}>
                    <ImageInput 
                        imageUrl={this.state.imageUrl} 
                        updateImageUrl={this.updateImageUrl.bind(this)} 
                    />
                    <ControlPanel 
                        onGradientChange={this.onGradientChange.bind(this)}
                        onBlurChange={this.onBlurChange.bind(this)}
                        onNewTextArea={this.onNewTextArea.bind(this)}
                    />
                </div>
                <ImageContainer
                    imageUrl={this.state.imageUrl}
                    gradientUrl={this.state.gradientUrl}
                    blurValue={this.state.blurValue}
                    textAreaModels={this.state.textAreaModels}
                />
            </div>
        )
    }
}
