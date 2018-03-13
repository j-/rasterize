import { connect } from 'react-redux';
import Events from '../components/Events';
import { setSource } from '../store/actions';

interface DispatchProps {
	setSource: (source: string) => void;
}

const mapDispatchToProps: DispatchProps = ({
	setSource,
});

export default connect<void, DispatchProps>(
	null,
	mapDispatchToProps,
)(Events);
