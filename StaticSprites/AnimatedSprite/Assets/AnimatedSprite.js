#pragma strict

var textures: Texture2D[];
var atlas: Texture2D;
var framerate: float = 15.0;
private var currentFrame = 0;
private var totalWidth:float;
private var nextFrame: float = 0;
private var timeBetweenFrames: float;

function Start () {
	timeBetweenFrames = 1.0/framerate;
	totalWidth = textures[0].width * textures.length;
	
	//make texture atlas
	atlas = new Texture2D(totalWidth,textures[0].height);
	
	GetComponent.<Renderer>().material.mainTexture = atlas;
	GetComponent.<Renderer>().material.color = Color.white;
	GetComponent.<Renderer>().material.shader = Shader.Find("Sprite");
	
	for(var i : int = 0; i < textures.length; i++) {
		for(var y : int = 0; y < textures[i].height; y++) {
			for(var x : int = 0; x < textures[i].width; x++) {
				atlas.SetPixel(x+i*textures[i].width,y,textures[i].GetPixel(x,y));
	
			}
		}
	}
	atlas.Apply();
	GetComponent.<Renderer>().material.mainTextureOffset = Vector2(0,0);
	GetComponent.<Renderer>().material.mainTextureScale = Vector2(1.0/textures.length,1);
}

function LateUpdate() {
	if(Time.time > nextFrame) {
		GetComponent.<Renderer>().material.mainTextureOffset = Vector2(currentFrame*textures[0].width/totalWidth,0);
		nextFrame = Time.time + timeBetweenFrames;
		currentFrame++;
		if(currentFrame >= textures.length) {
			currentFrame = 0;
		}
	}
}