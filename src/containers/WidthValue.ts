import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import NumberInput, { NumberInputProps as OwnProps } from '../components/NumberInput';
import { ReducerState, getWidth } from '../store';
import { setWidth } from '../store/actions';

interface StateProps {
	value: string | number | string[] | undefined;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getWidth(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setWidth(e.currentTarget.value)
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(NumberInput);
