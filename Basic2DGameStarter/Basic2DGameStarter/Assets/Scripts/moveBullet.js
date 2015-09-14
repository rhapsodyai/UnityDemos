#pragma strict

var speed = 2.0;
private var target:GameObject;
var explosion: GameObject;

function Start () {
	target = GameObject.Find("Base");
}

function Update () {
	this.transform.Translate(Vector3.forward * speed);
	if(Vector3.Distance(target.transform.position, this.transform.position) < 5) {
		var exp:GameObject = Instantiate(explosion,this.transform.position,this.transform.rotation);
		Destroy(exp,1.0);
		Destroy(this);
		//print("Hit!");
	}
}