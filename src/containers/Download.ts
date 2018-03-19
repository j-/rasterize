import { connect } from 'react-redux';
import Button, { ButtonProps as OwnProps } from '../components/Button';
import { renderToDataURL } from '../render';
import { downloadURL } from '../download';

import {
	ReducerState,
	getWidth,
	getHeight,
	getLeft,
	getTop,
	getBackground,
	getSource,
} from '../store';

interface StateProps {
	type: string;
	intent: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	type: 'button',
	intent: 'primary',
	onClick: async (e) => {
		e.preventDefault();
		const width = getWidth(state);
		const height = getHeight(state);
		const left = getLeft(state);
		const top = getTop(state);
		const background = getBackground(state);
		const src = getSource(state);
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		downloadURL(
			await renderToDataURL({ width, height, left, top, background, src, canvas, ctx }),
			`raster-${Date.now()}.png`,
			'image/png'
		);
	},
});

export default connect<StateProps, void, OwnProps>(
	mapStateToProps,
)(Button);
