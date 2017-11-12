import {h, Component} from 'preact';
import classnames from 'classnames';
import style from './style';

export default class ImageContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderGradient(props) {

        const inlineStyle = {
            'background-image': `url(${props.gradientUrl})`
        }

        const classNames = classnames(style.fullSize, style.gradientWrapper);

        return (
            <div class={classNames} style={inlineStyle}>
            </div>
        )
    }

    renderImage(props) {

        const inlineStyle = {
            'background-image': `url(${props.imageUrl})`,
            'filter': `blur(${props.blurValue}px)`
        };

        const classNames = classnames(style.fullSize, style.imageWrapper, {
            [style['imageWrapper--bordered']]: !props.imageUrl
        });

        return (
            <div class={classNames} style={inlineStyle}></div>
        )
    }

    render(props, state) {
        return (
            <div class={style.container}>
                {this.renderGradient(props)}
                {this.renderImage(props)}
            </div>
        )
    }
}