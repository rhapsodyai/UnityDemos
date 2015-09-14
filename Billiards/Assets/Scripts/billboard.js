#pragma strict

var stayUpright = true;

function Update () {
	transform.LookAt(Camera.current.transform);
	
	if(stayUpright) {
		transform.eulerAngles.x = 0;
	}
}