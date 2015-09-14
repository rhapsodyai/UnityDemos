#pragma strict

var aBullet: GameObject;
private var target: GameObject;
private var direction:Vector3;
private var state = "ATTACK";
private var startingPosition:Vector3;
private var rotationSpeed = 4.0;
private var attackDistance = 60;
private var retreatDistance = 10;
private var speed = 0.3;
private var reloadTime = 0.05;
private var lastShotTime = 0.0;

function Start () {	
	target = GameObject.Find("Base");
	//startingPosition = this.transform.position;
}

function Move () {
	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(direction), rotationSpeed * Time.deltaTime);
	this.transform.Translate(Vector3.forward * speed);
}

function Update () {
	direction = target.transform.position - transform.position;
	
	//determine state
	if(direction.magnitude > 60) {
		state = "ATTACK";
	}
	
	else if (direction.magnitude < 10) {
		state = "RETREAT";
	}
	
	//act on state
	if(state == "ATTACK") {
		//look at and move toward planet
		//this.transform.LookAt(target.transform.position);
		//this.transform.Translate(Vector3.forward * 0.3);
		Move();
		if(lastShotTime + reloadTime < Time.fixedTime) {
			var newBullet:GameObject = Instantiate(aBullet, this.transform.position, this.transform.rotation);
			Destroy(newBullet,0.5);
			lastShotTime = Time.fixedTime;
		}	
	}
	else if(state == "RETREAT") {
		//look at and move toward home base
		//this.transform.LookAt(startingPosition);
		//this.transform.Translate(Vector3.forward * 0.3);
		direction *= -1;
		Move();
	
	}
	//this.transform.LookAt(target.transform.position);
	//this.transform.Translate(Vector3.forward * 0.3);
}