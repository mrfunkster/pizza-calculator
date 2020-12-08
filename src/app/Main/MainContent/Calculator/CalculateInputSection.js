import React, { Component } from 'react'
import { connect } from 'react-redux'

import { isFreshYeast, inputHandler, resetInputs } from '../../../../common/store/actions'

class CalculateInputSection extends Component {

    changeInputHandler = e => {
        e.persist()
        this.props.inputHandler(
            e.target.name,
            e.target.value
        )
    }

    clearInput = e => {
        e.persist()
        this.props.inputHandler(
            e.target.name,
            ""
        )
    }

    checkInputsAndSubmit = () => {
        if (!this.props.ballWeight || !this.props.pizzaCount) {
            if(!this.props.ballWeight && !this.props.pizzaCount) {
                console.log("ENTER A VALUES")
            } else if(!this.props.ballWeight) {
                console.log("BALL WEIGHT EMPTY")
            } else if(!this.props.pizzaCount) {
                console.log("PIZZA COUNT EMPTY")
            }
        } else {
            console.log("CALCULATED")
        }
    }

    render() {
        const {
            isFresh,
            isFreshYeast,
            resetInputs,
            pizzaCount,
            ballWeight
        } = this.props
        return (
            <>
                <h3>Let's calculate some ingridients!</h3>
                <div className="input-section">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row individual-input">
                            <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                Pizza-ball weight for 1 pizza(g):
                            </div>
                            <input className="col-sm-12 col-md-6 col-lg-6" type="number"
                                name="ballWeight"
                                value={ballWeight}
                                onChange={this.changeInputHandler}
                                onFocus={this.clearInput}
                            />
                        </div>
                        <div className="row individual-input">
                            <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                Count of pizza's:
                            </div>
                            <input className="col-sm-12 col-md-6 col-lg-6" type="number" 
                                name="pizzaCount"
                                value={pizzaCount}
                                onChange={this.changeInputHandler}
                                onFocus={this.clearInput}
                            />
                        </div>
                        <div className="row individual-input">
                            <div className="col-sm-12 col-md-6 col-lg-6 input-name">
                                Are you using fresh or dry yeast?
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 checkbox-input">
                                <input type="checkbox" className="switch__checkbox"
                                    checked={isFresh}
                                    onChange={e => isFreshYeast(e.target.checked)}
                                />
                                <div className="checkbox-description">{isFresh ? "Fresh" : "Dry"}</div>
                            </div>
                        </div>
                        <div className="row button-section">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="link-button cancel">
                                    <div className="un-btn"
                                        onClick={() => resetInputs()}
                                    >Reset to default</div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="link-button submit">
                                    <div className="un-btn"
                                        onClick={() => this.checkInputsAndSubmit()}
                                    >Calculate</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

const mapDispatchToProps = {
    isFreshYeast,
    inputHandler,
    resetInputs
}

const mapStateToProps = state => ({
    isFresh: state.calculationData.isFresh,
    pizzaCount: state.calculationData.pizzaCount,
    ballWeight: state.calculationData.ballWeight
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculateInputSection)