import { Action, ActionCreator } from 'redux';

export interface ActionSetWidth extends Action {
	type: 'SetWidth';
	data: {
		width: number;
	};
}

export const isActionSetWidth = (action: Action): action is ActionSetWidth => (
	action.type === 'SetWidth'
);

export const setWidth: ActionCreator<ActionSetWidth> = (width: number) => ({
	type: 'SetWidth',
	data: {
		width,
	},
});

export interface ActionSetHeight extends Action {
	type: 'SetHeight';
	data: {
		height: number;
	};
}

export const isActionSetHeight = (action: Action): action is ActionSetHeight => (
	action.type === 'SetHeight'
);

export const setHeight: ActionCreator<ActionSetHeight> = (height: number) => ({
	type: 'SetHeight',
	data: {
		height,
	},
});

export interface ActionSetBackground extends Action {
	type: 'SetBackground';
	data: {
		background: string;
	};
}

export const isActionSetBackground = (action: Action): action is ActionSetBackground => (
	action.type === 'SetBackground'
);

export const setBackground: ActionCreator<ActionSetBackground> = (background: string) => ({
	type: 'SetBackground',
	data: {
		background,
	},
});

export interface ActionSetSource extends Action {
	type: 'SetSource';
	data: {
		source: string;
	};
}

export const isActionSetSource = (action: Action): action is ActionSetSource => (
	action.type === 'SetSource'
);

export const setSource: ActionCreator<ActionSetSource> = (source: string) => ({
	type: 'SetSource',
	data: {
		source,
	},
});
