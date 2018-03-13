import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { ReducerState, getBackground } from '../store';
import { setBackground } from '../store/actions';

interface StateProps {
	value: string | number | string[] | undefined;
}

interface DispatchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	value: getBackground(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
	onChange: (e) => dispatch(
		setBackground(e.currentTarget.value)
	),
});

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
)(TextInput);
