import * as React from 'react';
import { Observable } from 'rxjs';
import { pluck, mergeMap, filter } from 'rxjs/operators';
import './ImageUpload.css';

const { fromEvent, merge } = Observable;

export interface ImageUploadProps {
	setSource: (source: string) => void;
}

export default class ImageUpload extends React.PureComponent<ImageUploadProps> {
	private input: HTMLInputElement;

	componentDidMount () {
		this.attach();
	}

	componentWillUnmount () {
		this.detach();
	}

	render () {
		return (
			<div className="ImageUpload">
				<label className="ImageUpload-label">
					<input className="ImageUpload-input" type="file" accept="image/*" ref={this.assignRef} />
				</label>
				<div className="ImageUpload-content">
					{this.props.children}
				</div>
			</div>
		);
	}

	private attach = () => {
		const drag = fromEvent<DragEvent>(window, 'dragover');
		const drop = fromEvent<DragEvent>(window, 'drop');
		const paste = fromEvent<ClipboardEvent>(window, 'paste');
		const change = fromEvent<Event>(this.input, 'change');

		// Enable drag+drop operations
		const dragDropSubscription = merge(drag, drop).subscribe((e) => e.preventDefault());
		const dataURLSubscription = merge(
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
			),
			// Get files from file input
			change.pipe(
				mergeMap<Event, File>(() => this.input.files || [])
			)
		).pipe(
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
		).subscribe((dataURL) => {
			this.props.setSource(dataURL);
		});

		this.detach = () => {
			dragDropSubscription.unsubscribe();
			dataURLSubscription.unsubscribe();
		};
	}

	private detach = () => {
		// Will be overridden
	}

	private assignRef = (el: HTMLInputElement) => {
		this.input = el;
	}

}
