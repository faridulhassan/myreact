import { Component } from 'react';
import BoilingVerdict from './components/BoilingVerdict';
import Clock from './components/Clock';
import TemperatureInput from './components/TemperatureInput';
import { toCelsius, toFahrenheit } from './utils/utils';

class App extends Component {
    state = {
        temperature: 10,
        scale: 'c',
    };

    handleTemperatureInputChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
        const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;
        return (
            <div className="container mx-auto px-3">
                <h1 className="App bg-red py-2 font-bold text-2xl">Learning React</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border p-2 ">
                        <h2 className="App bg-red pb-2 font-bold">React Event Handler</h2>
                        <div className="border mb-3 p-3 shadow-sm md:flex flex-shrink-0 bg-gray-800 text-white rounded-md">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt=""
                                className="rounded-full w-16 h-16 shadow-md border md:mr-3 mx-auto"
                            />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                            consectetur quidem dolor eius a! Placeat consectetur impedit ipsa
                            excepturi quasi nemo saepe, neque nihil sit ex officiis rem quibusdam
                            earum.
                        </div>
                        <Clock local="en-US" />
                    </div>
                    <div className="border p-2 ">
                        <h2 className="App bg-red pb-2 font-bold">Lifting State Up</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <TemperatureInput
                                scale="c"
                                temperature={celsius}
                                onTemperatureChange={this.handleTemperatureInputChange}
                            />
                            <TemperatureInput
                                scale="f"
                                temperature={fahrenheit}
                                onTemperatureChange={this.handleTemperatureInputChange}
                            />
                        </div>
                        <BoilingVerdict temperature={parseFloat(celsius)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
