
function dump() {
	return UIATarget.localTarget().logElementTree();
}

function swipe(element) {
	element.dragInsideWithOptions({startOffset:{x:0.0, y:0.0}, endOffset:{x:0.8, y:0.10}, duration:0.1});
}