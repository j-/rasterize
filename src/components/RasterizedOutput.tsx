import * as React from 'react';
import { renderToDataURL } from '../render';
import './RasterizedOutput.css';

export interface RasterizedOutputProps {
	width: number;
	height: number;
	left: number;
	top: number;
	background: string;
	src: string;
}

export default class RasterizedOutput extends React.PureComponent<RasterizedOutputProps> {
	private container: HTMLDivElement;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private image: HTMLImageElement;

	componentWillMount () {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		this.image = new Image();
	}

	render () {
		this.draw();
		return <div className="RasterizedOutput" ref={this.assignRef} />;
	}

	private draw = async () => {
		const { width, height, left, top, background, src } = this.props;
		const { canvas, ctx, image } = this;
		ctx.clearRect(0, 0, left + width, top + height);
		image.src = await renderToDataURL({ width, height, left, top, background, src, canvas, ctx });
	}

	private assignRef = (el: HTMLDivElement) => {
		this.container = el;
		this.attach();
	}

	private attach = () => {
		this.container.appendChild(this.image);
	}
}
