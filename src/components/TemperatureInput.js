/* const scaleNames = {
    f: 'Fahrenheit',
    c: 'Celcius',
}; */
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    return (
        <div>
            <p className="font-bold text-2xl">
                {scale.toUpperCase()}
                <sup>°</sup>
            </p>
            <input
                type="number"
                min="0"
                className="border p-1 rounded w-full block"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </div>
    );
}
TemperatureInput.defaultProps = {
    scale: 'c',
    // onChange: () => {},
};
export default TemperatureInput;
