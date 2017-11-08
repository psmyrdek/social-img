import { h, Component } from 'preact';
import GeneratorContainer from '../../components/generator-container';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<GeneratorContainer />
			</div>
		);
	}
}
