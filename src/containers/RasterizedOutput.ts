import { connect } from 'react-redux';
import RasterizedOutput, { RasterizedOutputProps } from '../components/RasterizedOutput';

import {
	ReducerState,
	getWidth,
	getHeight,
	getLeft,
	getTop,
	getBackground,
	getSource,
} from '../store';

const mapStateToProps = (state: ReducerState): RasterizedOutputProps => ({
	width: getWidth(state),
	height: getHeight(state),
	left: getLeft(state),
	top: getTop(state),
	background: getBackground(state),
	src: getSource(state),
});

export default connect(
	mapStateToProps,
)(RasterizedOutput);
