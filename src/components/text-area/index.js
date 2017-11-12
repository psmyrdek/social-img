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

    setText(newText) {
        this.setState(prevState => {
            return {
                text: newText
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

    renderItalicCheckbox() {
        return (
            <label>
                <span class={style.editFormOption}>Italic</span>
                <input type="checkbox"
                    value={this.state.italic}
                    onChange={() => this.toggleItalic()} />
            </label>
        )
    }

    renderFontSizeInput() {
        return (
            <label>
                <span class={style.editFormOption}>Font size</span>
                <input type="number"
                    min="0"
                    value={this.state.fontSize}
                    onChange={(e) => this.setFontSize(e.srcElement.value)} />
            </label>
        )
    }

    renderTopInput() {
        return (
            <label>
                <span class={style.editFormOption}>Top</span>
                <input type="number"
                    value={this.state.top}
                    onChange={(e) => this.setTop(e.srcElement.value)} />
            </label>
        )
    }

    renderRemoveBtn() {
        // TODO
        return (
            <button onClick={() => onRemove()}>Remove &times; </button>
        )
    }

    renderCloseBtn() {
        return (
            <button onClick={() => this.setEditMode(false)}>Close</button>
        )
    }

    renderTextInput() {
        return (
            <input class={style.editInput} 
                type="text" 
                value={this.state.text} 
                onChange={(e) => this.setText(e.srcElement.value)} 
            />
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

        const textClassNames = classNames({
            [style.textArea]: true,
            [style['textArea--editing']]: this.state.isEditEnabled,
            [style['textArea--italic']]: this.state.italic
        });

        const textStyle = {
            'font-size': `${this.state.fontSize}px`,
            'font-weight': this.state.fontWeight
        };

        return (
            <div class={style.textAreaWrapper} style={{ top: `${this.state.top}px` }} >
                <p class={textClassNames} style={textStyle} onClick={() => this.setEditMode(true)}>
                    {this.state.text}
                </p>
                {this.state.isEditEnabled &&
                    <div class={style.editPanel}>
                        {this.renderTextInput()}
                        <div>
                            {this.renderItalicCheckbox()}
                            {this.renderFontSizeInput()}
                            {this.renderTopInput()}
                            {this.renderWeightSelector()}
                            {this.renderCloseBtn()}
                            {this.renderRemoveBtn()}
                        </div>
                    </div>
                }
            </div>
        )
    }
}