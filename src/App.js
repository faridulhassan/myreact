import Clock from './components/Clock';

function App() {
    return (
        <div className="container mx-auto px-3">
            <div className="App bg-red py-2 font-bold">Hello</div>
            <div className="p-2 border mb-3 shadow-sm md:bg-green-900 md:text-white md:font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consectetur
                quidem dolor eius a! Placeat consectetur impedit ipsa excepturi quasi nemo saepe,
                neque nihil sit ex officiis rem quibusdam earum.
            </div>
            <Clock local="en-US" />
        </div>
    );
}

export default App;
