export const downloadURL = (
	url: string,
	filename: string,
	type: string,
) => {
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();
};

export const downloadData = (
	raw: ArrayBuffer | ArrayBufferView | Blob | string,
	filename: string,
	type: string = 'application/binary',
) => {
	const blob = new Blob([raw], { type });
	const url = URL.createObjectURL(blob);
	downloadURL(url, filename, type);
	URL.revokeObjectURL(url);
};
