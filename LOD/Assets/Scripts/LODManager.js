#pragma strict

var lod1: Mesh;
var lod2: Mesh;
var lodDist1: float;
var lodDist2: float;
var updateInterval : float = 1.0;
var currentLOD: int = 1;
var meshFilter : MeshFilter;
var thisTransform: Transform;

function Awake () {

	meshFilter = GetComponent(MeshFilter) as MeshFilter;
	thisTransform = transform;
	var startIn : float = Random.Range(0.0,updateInterval);
	InvokeRepeating("UpdateLOD",startIn,updateInterval);
}

function updateLOD () {

	var distanceFromObject : float = Vector3.Distance(thisTransform.position,Camera.main.transform.position);
	if(distanceFromObject < lodDist1) {
		if(currentLOD != 1) {
			currentLOD = 1;
			meshFilter.mesh = lod1;
		}
	}
	else if (distanceFromObject < lodDist2) {
		if(currentLOD != 2) {
			currentLOD = 2;
			meshFilter.mesh = lod2;
		}
	}
	else {
		currentLOD = 0;
		meshFilter.mesh = null;
	}
}

function Start () {

}

function Update () {

}