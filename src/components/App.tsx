import * as React from 'react';
import Events from '../containers/Events';
import WidthValue from '../containers/WidthValue';
import HeightValue from '../containers/HeightValue';
import BackgroundValue from '../containers/BackgroundValue';
import RasterizedOutput from '../containers/RasterizedOutput';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Events />

		<section className="App-config">
			<fieldset>
				<legend>Output image options</legend>

				<label htmlFor="App-config-width">Width (px)</label><br />
				<WidthValue id="App-config-width" /><br />

				<br />

				<label htmlFor="App-config-height">Height (px)</label><br />
				<HeightValue id="App-config-height" /><br />

				<br />

				<label htmlFor="App-config-background">Background color</label><br />
				<BackgroundValue id="App-config-background" /><br />
			</fieldset>
		</section>

		<section className="App-output">
			<RasterizedOutput />
		</section>
	</div>
);

export default App;
