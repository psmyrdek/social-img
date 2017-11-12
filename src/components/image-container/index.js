import {h, Component} from 'preact';
import classnames from 'classnames';
import TextArea from '../../components/text-area';
import style from './style';

export default class ImageContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderGradient({gradientUrl}) {

        const inlineStyle = {
            'background-image': `url(${gradientUrl})`
        }

        const classNames = classnames(style.fullSize, style.gradientWrapper);

        return (
            <div class={classNames} style={inlineStyle}>
            </div>
        )
    }

    renderImage({imageUrl, blurValue}) {

        const inlineStyle = {
            'background-image': `url(${imageUrl})`,
            'filter': `blur(${blurValue}px)`
        };

        const classNames = classnames(style.fullSize, style.imageWrapper, {
            [style['imageWrapper--bordered']]: !imageUrl
        });

        return (
            <div class={classNames} style={inlineStyle}></div>
        )
    }

    renderTextAreas({textAreaModels}) {

        const classNames = classnames(style.fullSize, style.textAreasWrapper);

        return (
            <div class={classNames}>
                {textAreaModels.map(x => <TextArea model={x} />)}
            </div>
        )
    }

    render(props, state) {
        return (
            <div class={style.container}>
                {this.renderTextAreas(props)}
                {this.renderGradient(props)}
                {this.renderImage(props)}
            </div>
        )
    }
}