import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import NumberInput, { NumberInputProps as OwnProps } from '../components/NumberInput';
import { ReducerState, getHeight } from '../store';
import { setHeight } from '../store/actions';

interface StateProps {
	value: string | number | string[] | undefined;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getHeight(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setHeight(e.currentTarget.value)
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(NumberInput);
