import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Observable } from 'rxjs';
import { pluck, mergeMap, filter } from 'rxjs/operators';
import './index.css';
import { setSource } from 'src/store/actions';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Events */

const { fromEvent, merge } = Observable;

const drag = fromEvent<DragEvent>(window, 'dragover');
const drop = fromEvent<DragEvent>(window, 'drop');
const paste = fromEvent<ClipboardEvent>(window, 'paste');

// Enable drag+drop operations
merge(drag, drop).subscribe((e) => e.preventDefault());

merge(

	// Get data transfers from drag+drop events
	drop.pipe(
		pluck<DragEvent, DataTransfer>('dataTransfer'),
	),

	// Get data transfers from copy+paste events
	paste.pipe(
		pluck<ClipboardEvent, DataTransfer>('clipboardData'),
	),

).pipe(

	// Get files from data transfers
	mergeMap<DataTransfer, File>((dataTransfer) => dataTransfer.files),

	// Ignore all files which are not images
	filter<File>((file) => /^image\//.test(file.type)),

	// Convert image file to data URL
	mergeMap<File, string>((file) => (
		new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = (err) => reject(err);
			reader.readAsDataURL(file);
		})
	)),

).subscribe((dataURL) => (

	store.dispatch(setSource(dataURL))

));
