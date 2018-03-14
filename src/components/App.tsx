import * as React from 'react';
import ImageUpload from '../containers/ImageUpload';
import WidthValue from '../containers/WidthValue';
import HeightValue from '../containers/HeightValue';
import BackgroundValue from '../containers/BackgroundValue';
import RasterizedOutput from '../containers/RasterizedOutput';
import BackgroundSuggestion from '../containers/BackgroundSuggestion';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<section className="App-config">
			<fieldset className="App-config-input">
				<legend>Input image</legend>

				<ImageUpload>
					<button type="button">Browse</button>, copy+paste or drag+drop an image to begin
				</ImageUpload>
			</fieldset>

			<fieldset className="App-config-output">
				<legend>Output image options</legend>

				<label htmlFor="App-config-width">Width (px)</label><br />
				<WidthValue id="App-config-width" /><br />

				<br />

				<label htmlFor="App-config-height">Height (px)</label><br />
				<HeightValue id="App-config-height" /><br />

				<br />

				<label htmlFor="App-config-background">Background color</label><br />
				<BackgroundValue id="App-config-background" /><br />

				<div className="App-background-suggestions">
					<BackgroundSuggestion value="transparent">Transparent</BackgroundSuggestion>
					<BackgroundSuggestion value="white">White</BackgroundSuggestion>
					<BackgroundSuggestion value="black">Black</BackgroundSuggestion>
					<BackgroundSuggestion value="#888">50% Grey</BackgroundSuggestion>
				</div>

				<br />
				<hr />
				<br />

				<button className="App-download-png" type="button">Download PNG</button>
			</fieldset>

		</section>

		<section className="App-output">
			<RasterizedOutput />
		</section>
	</div>
);

export default App;
