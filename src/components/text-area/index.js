import { h, Component } from 'preact';
import classNames from 'classnames';
import style from './style';

export default class TextArea extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.model);
    }

    toggleItalic() {
        this.setState(prevState => {
            return {
                italic: !prevState.italic
            }
        })
    }

    setEditMode(isEnabled) {
        this.setState(prevState => {
            return {
                isEditEnabled: isEnabled
            }
        })
    }

    setFontSize(newFontSize) {
        this.setState(prevState => {
            return {
                fontSize: newFontSize
            }
        });
    }

    setFontWeight(newFontWeight) {
        this.setState(prevState => {
            return {
                fontWeight: newFontWeight
            }
        });
    }

    setTop(newTop) {
        this.setState(prevState => {
            return {
                top: newTop
            }
        });
    }

    renderItalicCheckbox(italic) {
        return (
            <label>
                <span class={style.editFormOption}>Italic</span>
                <input type="checkbox"
                    value={italic}
                    onChange={() => this.toggleItalic()} />
            </label>
        )
    }

    renderFontSizeInput(fontSize) {
        return (
            <label>
                <span class={style.editFormOption}>Font size</span>
                <input type="number"
                    min="0"
                    value={fontSize}
                    onChange={(e) => this.setFontSize(e.srcElement.value)} />
            </label>
        )
    }

    renderTopInput(top) {
        return (
            <label>
                <span class={style.editFormOption}>Top</span>
                <input type="number"
                    value={top}
                    onChange={(e) => this.setTop(e.srcElement.value)} />
            </label>
        )
    }

    renderRemoveBtn(onRemove) {
        // TODO
        return (
            <button onClick={() => onRemove()}>Remove &times; </button>
        )
    }

    renderCloseBtn() {
        // TODO
        return (
            <button onClick={() => this.setEditMode(false)}>Close</button>
        )
    }

    renderWeightSelector() {
        return (
            <label>
                <span class={style.editFormOption}>Font weight</span>
                <select onChange={(e) => this.setFontWeight(e.srcElement.value)}>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                </select>
            </label>
        )
    }

    render(props) {

        const textClassNames = {
            [style.textArea]: true,
            [style['textArea--editing']]: this.state.isEditEnabled,
            [style['textArea--italic']]: this.state.italic
        };

        const textStyle = {
            'font-size': `${this.state.fontSize}px`,
            'font-weight': this.state.fontWeight
        };

        return (
            <div class={style.textAreaWrapper} style={{ top: `${this.state.top}px` }} >
                <p class={classNames(textClassNames)} style={textStyle} onClick={() => this.setEditMode(true)}>
                    {this.state.text}
                </p>
                {this.state.isEditEnabled &&
                    <div>
                        {this.renderItalicCheckbox(this.state.italic)}
                        {this.renderFontSizeInput(this.state.fontSize)}
                        {this.renderTopInput(this.state.top)}
                        {this.renderWeightSelector()}
                        {this.renderCloseBtn()}
                        {this.renderRemoveBtn(props.onRemove)}
                    </div>
                }
            </div>
        )
    }
}