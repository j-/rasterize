import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import Button, { ButtonProps as OwnProps } from '../components/Button';
import { setBackground } from '../store/actions';

interface DispatchProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, props: OwnProps): DispatchProps => ({
	onClick: () => dispatch(
		setBackground(props.value)
	),
});

export default connect<void, DispatchProps, OwnProps>(
	null,
	mapDispatchToProps,
)(Button);
