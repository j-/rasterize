import * as React from 'react';
import WidthValue from '../containers/WidthValue';
import HeightValue from '../containers/HeightValue';
import BackgroundValue from '../containers/BackgroundValue';
import RasterizedOutput from '../containers/RasterizedOutput';

const App: React.StatelessComponent = () => (
	<div className="App">
		<div className="App-config">
			<WidthValue />
			<HeightValue />
			<BackgroundValue />
		</div>
		<div className="App-output">
			<RasterizedOutput />
		</div>
	</div>
);

export default App;
