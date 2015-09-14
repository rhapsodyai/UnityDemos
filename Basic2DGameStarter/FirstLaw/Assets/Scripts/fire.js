#pragma strict

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1")) {
		var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var sphere:GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		sphere.transform.position = ray.origin;
		//v.normal.xyz = v.normal * -1;

		//sphere.GetComponent.<Renderer>().material.mainTexture = nyan.bmp;
		sphere.AddComponent.<Rigidbody>();
		sphere.GetComponent.<Rigidbody>().mass = 10;
		sphere.GetComponent.<Rigidbody>().AddForce(ray.direction * 10000);
	}
}