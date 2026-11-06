"use strict"

importScripts("/_assets/4c09d32507760252ea4f.js")
importScripts("/_assets/50a3a355e842d1dcb22b.js")

onmessage = (event) => {
	const data = event.data
	if (data.name = "compress") {
		data.name = "done"
		data.data = LZString.compressToBase64("lzstr"+compressSaveData(data.data))
		postMessage(data)
	}
}