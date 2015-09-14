var building:GameObject;
function Start() {
	for(var i = 0; i < 20; i++) {
		for(var j = 0; j < 20; j++) {
			var newPos: Vector3 = new Vector3(i*Random.Range(100,200),0,
											  j*Random.Range(100,200));
			var b:GameObject = Instantiate(building,newPos,Quaternion.identity);
		}
	}
}

function Update() {}