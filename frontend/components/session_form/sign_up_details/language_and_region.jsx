import React from 'react'

class LanguageAndRegion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: '',
            region: ''
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.languages = [
            "English", "Spanish", "Mandarin", "Hindi", "Bengali", "Portuguese",
            "Russian", "Japanese", "Korean", "French", "German", "Vietnamese",
            "Italian", "Arabic", "Tagalog", "Armenian"
        ];
        this.regions = [
            "North America", "South America", "Europe", "Africa", "Asia",
            "Australia", "Antarctica"
        ];
    }

    handleNext(e) {
        e.preventDefault();
        this.checkFields();
    }

    handlePrev(e) {
        e.preventDefault();
        this.props.prevStep();
    }

    checkFields() {
        const { values } = this.props;
        let newErrors = [];
        Object.keys(values).forEach(val => {
            if (values[val] === '') {
                newErrors.push(`${val} can't be blank!`);
            }
        })
        this.props.addErrors(newErrors);
    }

    dropDown(category, list) {
        return (
            <div id={category}>
                <div className="drop-down"
                    id={`selected-text-${category}`}
                    onClick={this.showMenu(`${category}-names`)}>
                    {`--Select ${category}--`}
                </div>
                <ul id={`${category}-names`}
                    className="drop-down-menu">
                    {list.map((ele, idx) => {
                        return (
                            <li key={idx}
                                value={ele}
                                className="board-name"
                                onClick={this.makeSelection(category)}
                            >{ele}</li>
                        )
                    })}
                </ul>
                <div className={`"drop-down-arrow-select-${category}`}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }

    makeSelection(category) {
        return e => {
            document.getElementById(`selected-text-${category}`).innerHTML = e.currentTarget.innerHTML;
            this.showMenu(`${category}-names`)(e);
            this.props.update(category)(e);
        }
    }

    showMenu(name) {
        return () => {
            document.getElementById(name).classList.toggle("show-menu")
        }
    }

    render() {
        return (
            <div className="modal-background">
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="user-details-form-box">
                        <form className="login-form">
                            <h1 className="form-title">Pick your language and country/region</h1>
                            <div className="dropdown-fields">
                                <div>Language: {this.dropDown("language", this.languages)}</div>
                                <div>Region: {this.dropDown("region", this.regions)}</div>
                            </div>
                            <div className="error">
                                {this.props.showErrors()}
                            </div>
                        </form>
                        <div className="login-form-buttons">
                            <button className="next login-button button" onClick={this.handleNext} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanguageAndRegion;