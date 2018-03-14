export const downloadData = (
	raw: ArrayBuffer | ArrayBufferView | Blob | string,
	filename: string,
	type: string = 'application/binary',
) => {
	const blob = new Blob([raw], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
};
