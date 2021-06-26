import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isRunning: false,
            local: props.local || 'bn-BD',
        };
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    handleClick = () => {
        const { isRunning } = this.state;
        this.setState((state) => ({
            isRunning: !state.isRunning,
        }));
        if (!isRunning) {
            this.tick();
        } else {
            this.clearTimer();
        }
    };

    clearTimer = () => {
        clearInterval(this.timer);
    };

    tick = () => {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() });
        });
    };

    render() {
        const { local, date, isRunning } = this.state;
        return (
            <div>
                <div className="inline-block mr-3 mb-3 md:w-96 w-full max-w-full text-center text-2xl  bg-blue-700 text-white p-2 rounded shadow-sm">
                    {date.toLocaleTimeString(local)}
                </div>

                <button
                    className={`bg-${
                        isRunning ? 'red' : 'green'
                    }-500 text-2xl  py-2 px-3 text-white rounded`}
                    type="button"
                    onClick={this.handleClick}
                >
                    {isRunning ? 'Pause' : 'Start'} Timer
                </button>
            </div>
        );
    }
}
