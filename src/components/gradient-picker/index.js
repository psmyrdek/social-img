import { h, Component } from 'preact';
import style from './style';

export default (props) => {
    return (
        <div class={style.gradientPickerContainer}>
            <p class="controlPanelTitle">Gradient</p>
            <select class={style.gradientSelect} onChange={(e) => props.onChange(e.srcElement.value)}>
                <option value="">Pick gradient style</option>
                <option value="/assets/gradients/1.png">Style 1</option>
                <option value="/assets/gradients/2.png">Style 2</option>
                <option value="/assets/gradients/3.png">Style 3</option>
                <option value="/assets/gradients/4.png">Style 4</option>
            </select>
        </div>
    )
}