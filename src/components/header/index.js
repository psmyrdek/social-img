import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Social Images Generator</h1>
				<nav>
					<Link activeClassName={style.active} href="/social-img">Home</Link>
				</nav>
			</header>
		);
	}
}
