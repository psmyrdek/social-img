import { h, Component } from 'preact';
import style from './style';

export default (props) => {

    const ifEnabled = (
        <div>
            <div class={style.fullScreen}>
                <div class={style.fullScreenContent}>
                    {props.children}
                </div>
            </div>
            <p class={style.sizeInfo}>Crop this to - 1200px x 625px</p>
            <button class={style.closeBtn} onClick={() => props.onPreviewClose()}>Close</button>
        </div>
    )

    const ifDisabled = (
        <div>{props.children}</div>
    )

    return props.enabled ? ifEnabled : ifDisabled;
}