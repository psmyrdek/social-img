import { h, Component } from 'preact';

export default class GeneratorContainer extends Component {

    constructor(props) {
        super(props);

        this.imgPreviewStyle = {
            width: 1200,
            height: 625
        };
    }

    render(props, state) {
        const previewStyle = Object.assign({}, this.imgPreviewStyle, {
            'background-image': `url('${this.props.imageUrl}')`,
            'filter': `blur(${this.props.blurValue}px)`
        });

        return (
            <div style={previewStyle}></div>
        )
    }

}