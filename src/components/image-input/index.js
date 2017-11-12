import {h, Component} from 'preact';
import style from './style.css';

export default (props) => {
    return (
        <input
            type="text"
            class={style.imageInput}
            placeholder="Image URL"
            value={props.imageUrl}
            onChange={e => props.updateImageUrl(e.srcElement.value)}
        />
    )
}