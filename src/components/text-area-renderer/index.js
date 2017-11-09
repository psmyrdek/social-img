import {h, Component} from 'preact';

export default class TextAreaRenderer {
    
    render(props) {
        const style = {
            'position': 'relative',
            'text-align': 'center',
            'color': '#FFF',
            'font-family': 'Montserrat, sans-serif',
            'font-weight': '700',
            'font-style': props.italic ? 'italic' : 'normal',
            'font-size': props.fontSize,
            'margin': 0,
            'padding': 0,
            'top': props.top
        };

        return (
            <p style={style}>{props.text}</p>
        )
    }
}