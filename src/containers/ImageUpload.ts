import { connect } from 'react-redux';
import ImageUpload from '../components/ImageUpload';
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
)(ImageUpload);
