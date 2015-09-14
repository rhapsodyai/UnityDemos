var speed:float = 0.5;
function Update() {

	if(Input.GetKey("right")) {
		this.transform.position.z += speed;
	}
	
	if(Input.GetKey("left")) {
		this.transform.position.z -= speed;
	}
}