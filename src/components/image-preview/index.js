import { h, Component } from 'preact';
import appConfig from '../../common/appConfig';

export default class GeneratorContainer extends Component {

    constructor(props) {
        super(props);

        this.imgPreviewStyle = {
            width: 1200,
            height: 625,
            border: '1px solid #efefef'
        };
    }

    render(props, state) {
        const previewStyle = Object.assign({}, this.imgPreviewStyle, {
            'background-image': `url('${this.props.imageUrl}')`
        });

        return (
            <div style={previewStyle}></div>
        )
    }

}