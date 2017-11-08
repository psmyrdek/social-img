import { h, Component } from 'preact';
import { Router } from 'preact-router';
import GeneratorContainer from './generator-container';
import Header from './header';
import style from './style';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class={style.app}>
				<Header />
				<div class={style.home}>
					<GeneratorContainer />
				</div>
			</div>
		);
	}
}
