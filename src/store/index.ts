import { Reducer } from 'redux';

import {
	isActionSetWidth,
	isActionSetHeight,
	isActionSetSource,
	isActionSetBackground,
} from './actions';

export interface ReducerState {
	width: number;
	height: number;
	left: number;
	top: number;
	background: string;
	src: string;
}

const DEFAULT_STATE: ReducerState = {
	width: 200,
	height: 200,
	left: 0,
	top: 0,
	background: 'transparent',
	src: 'data:image/svg+xml;utf8,' + encodeURI(`
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<circle cx="50" cy="50" r="49" fill="transparent" stroke="#888" />
			<path d="M45 10l5-10 5 10M50 0v50" stroke="#000" />
		</svg>
	`),
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetWidth(action)) {
		return {
			...state,
			width: action.data.width,
		};
	}

	if (isActionSetHeight(action)) {
		return {
			...state,
			height: action.data.height,
		};
	}

	if (isActionSetBackground(action)) {
		return {
			...state,
			background: action.data.background,
		};
	}

	if (isActionSetSource(action)) {
		return {
			...state,
			src: action.data.source,
		};
	}

	return state;
};

export default reducer;

export const getWidth = (state: ReducerState): number => state.width;
export const getHeight = (state: ReducerState): number => state.height;
export const getLeft = (state: ReducerState): number => state.left;
export const getTop = (state: ReducerState): number => state.top;
export const getBackground = (state: ReducerState): string => state.background;
export const getSource = (state: ReducerState): string => state.src;
