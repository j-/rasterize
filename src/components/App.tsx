import * as React from 'react';
import ImageUpload from '../containers/ImageUpload';
import WidthValue from '../containers/WidthValue';
import HeightValue from '../containers/HeightValue';
import BackgroundValue from '../containers/BackgroundValue';
import RasterizedOutput from '../containers/RasterizedOutput';
import BackgroundSuggestion from '../containers/BackgroundSuggestion';
import Download from '../containers/Download';
import './App.css';

import {
	App as ThemedApp,
	Button,
	ButtonGroup,
} from '@skeoh/pic';

const App: React.StatelessComponent = () => (
	<ThemedApp primaryColor="#09c">
		<div className="App">
			<section className="App-config">
				<fieldset className="App-config-input">
					<legend>Input image</legend>

					<ImageUpload>
						<Button type="button" tabIndex={-1}>Browse</Button>, copy+paste or drag+drop an image to begin
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

					<br />

					<ButtonGroup vertical={true} style={{ width: '100%' }}>
						<BackgroundSuggestion value="transparent">Transparent</BackgroundSuggestion>
						<BackgroundSuggestion value="white">White</BackgroundSuggestion>
						<BackgroundSuggestion value="black">Black</BackgroundSuggestion>
						<BackgroundSuggestion value="#888">50% Grey</BackgroundSuggestion>
					</ButtonGroup>

					<br />
					<br />
					<hr />
					<br />

					<Download className="App-download-png">Download PNG</Download>
				</fieldset>

			</section>

			<section className="App-output">
				<RasterizedOutput />
			</section>
		</div>
	</ThemedApp>
);

export default App;
