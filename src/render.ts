export interface RenderArgs {
	width: number;
	height: number;
	left: number;
	top: number;
	background: string;
	src: string;
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
}

export const renderToDataURL = (args: RenderArgs) => {
	return new Promise<string>((resolve, reject) => {
		const { width, height, left, top, background, src, canvas, ctx } = args;
		canvas.width = left + width;
		canvas.height = top + height;
		const img = new Image(width, height);
		img.onload = () => {
			ctx.fillStyle = background;
			ctx.fillRect(0, 0, left + width, top + height);
			ctx.drawImage(img, left, top, width, height);
			resolve(canvas.toDataURL());
		};
		img.onerror = reject;
		img.src = src;
	});
};
