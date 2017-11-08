import { h, Component } from 'preact';
import style from './style';

export default (props) => {

    const prefix = process.env.NODE_ENV === 'production' ? '/social-img' : '';

    return (
        <div class={style.gradientPickerContainer}>
            <p class={style.gradientPickerTitle}>Gradient</p>
            <select class={style.gradientPickerSelect} onChange={(e) => props.onChange(e.srcElement.value)}>
                <option value="">Pick gradient style</option>
                <option value={`${prefix}/assets/gradients/1.png`}>Style 1</option>
                <option value={`${prefix}/assets/gradients/2.png`}>Style 2</option>
                <option value={`${prefix}/assets/gradients/3.png`}>Style 3</option>
                <option value={`${prefix}/assets/gradients/4.png`}>Style 4</option>
            </select>
        </div>
    )
}